"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          // Calculate distance from center of the element
          const centerX = left + width * 0.5;
          const centerY = top + height * 0.5;
          const distanceFromCenter = Math.hypot(
            mouseX - centerX,
            mouseY - centerY
          );

          // The inner dead-zone radius
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          // Determine if mouse is within proximity range of element bounds
          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          if (!isActive) {
            element.style.setProperty("--active", "0");
            return;
          }

          // Calculate angle for conic-gradient
          const angle =
            (Math.atan2(mouseY - centerY, mouseX - centerX) * 180) / Math.PI;

          element.style.setProperty("--active", "1");
          element.style.setProperty("--start", `${angle + 90}deg`);
          element.style.setProperty("--spread", `${spread}deg`);
          element.style.setProperty("--border-width", `${borderWidth}px`);
          element.style.setProperty("--blur", `${blur}px`);
        });
      },
      [blur, inactiveZone, proximity, spread, borderWidth]
    );

    useEffect(() => {
      if (disabled) return;

      const controller = new AbortController();
      window.addEventListener("mousemove", handleMove, {
        signal: controller.signal,
        passive: true,
      });

      return () => {
        controller.abort();
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [disabled, handleMove]);

    const gradientStyle =
      variant === "white"
        ? "conic-gradient(from var(--start, 0deg), #ffffff00 0deg, white var(--spread, 20deg), #ffffff00 calc(var(--spread, 20deg) + 10deg))"
        : "conic-gradient(from var(--start, 0deg), #a855f700 0deg, #a855f7 var(--spread, 20deg), #6366f1 calc(var(--spread, 20deg) * 1.5), #a855f700 calc(var(--spread, 20deg) + 20deg))";

    return (
      <div
        ref={containerRef}
        className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
        style={
          {
            "--active": "0",
            "--start": "0deg",
            "--spread": `${spread}deg`,
            "--border-width": `${borderWidth}px`,
            "--blur": `${blur}px`,
          } as React.CSSProperties
        }
      >
        {/* The glowing border layer */}
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            opacity: "var(--active)",
            transition: `opacity ${movementDuration * 0.3}s ease`,
            padding: `var(--border-width)`,
            background: gradientStyle,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            filter: `blur(var(--blur))`,
          }}
        />

        {/* Optional always-visible glow when 'glow' prop is true */}
        {glow && (
          <div
            className="absolute inset-0 rounded-[inherit] opacity-30"
            style={{
              background: gradientStyle,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: `var(--border-width)`,
            }}
          />
        )}
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
