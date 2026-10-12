"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type GlowingEffectVariant = "default" | "obsidian" | "black" | "premium" | "white" | "celestial";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: GlowingEffectVariant;
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
    variant = "obsidian",
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
          // Center the peak of the conic gradient directly on the cursor
          element.style.setProperty("--start", `${angle + 90 - spread}deg`);
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

    const getGradient = (v: GlowingEffectVariant) => {
      switch (v) {
        case "white":
          return "conic-gradient(from var(--start, 0deg), transparent 0deg, rgba(255, 255, 255, 0.15) calc(var(--spread, 20deg) * 0.35), rgba(255, 255, 255, 0.65) calc(var(--spread, 20deg) * 0.7), #ffffff var(--spread, 20deg), rgba(255, 255, 255, 0.65) calc(var(--spread, 20deg) * 1.3), rgba(255, 255, 255, 0.15) calc(var(--spread, 20deg) * 1.65), transparent calc(var(--spread, 20deg) * 2))";
        case "celestial":
          return "conic-gradient(from var(--start, 0deg), transparent 0deg, rgba(56, 189, 248, 0.25) calc(var(--spread, 20deg) * 0.35), rgba(129, 140, 248, 0.6) calc(var(--spread, 20deg) * 0.7), #ffffff var(--spread, 20deg), rgba(192, 132, 252, 0.6) calc(var(--spread, 20deg) * 1.3), rgba(244, 114, 182, 0.25) calc(var(--spread, 20deg) * 1.65), transparent calc(var(--spread, 20deg) * 2))";
        case "premium":
          return "conic-gradient(from var(--start, 0deg), transparent 0deg, rgba(255, 255, 255, 0.08) calc(var(--spread, 20deg) * 0.25), rgba(226, 232, 240, 0.55) calc(var(--spread, 20deg) * 0.65), #ffffff var(--spread, 20deg), rgba(226, 232, 240, 0.55) calc(var(--spread, 20deg) * 1.35), rgba(255, 255, 255, 0.08) calc(var(--spread, 20deg) * 1.75), transparent calc(var(--spread, 20deg) * 2))";
        case "default":
        case "obsidian":
        case "black":
        default:
          // Stealth Obsidian / Dark Smoke: Deep jet-black beam framed by rich dark charcoal & luminous graphite smoke
          return "conic-gradient(from var(--start, 0deg), transparent 0deg, rgba(161, 161, 170, 0.2) calc(var(--spread, 20deg) * 0.2), rgba(228, 228, 231, 0.6) calc(var(--spread, 20deg) * 0.5), rgba(39, 39, 42, 0.95) calc(var(--spread, 20deg) * 0.75), #000000 var(--spread, 20deg), rgba(39, 39, 42, 0.95) calc(var(--spread, 20deg) * 1.25), rgba(228, 228, 231, 0.6) calc(var(--spread, 20deg) * 1.5), rgba(161, 161, 170, 0.2) calc(var(--spread, 20deg) * 1.8), transparent calc(var(--spread, 20deg) * 2))";
      }
    };

    const getBloomGradient = (v: GlowingEffectVariant) => {
      switch (v) {
        case "default":
        case "obsidian":
        case "black":
          // Deep ambient smoke halo
          return "conic-gradient(from var(--start, 0deg), transparent 0deg, rgba(113, 113, 122, 0.35) calc(var(--spread, 20deg) * 0.35), rgba(0, 0, 0, 0.95) var(--spread, 20deg), rgba(113, 113, 122, 0.35) calc(var(--spread, 20deg) * 1.65), transparent calc(var(--spread, 20deg) * 2))";
        default:
          return getGradient(v);
      }
    };

    const gradientStyle = getGradient(variant);
    const bloomGradientStyle = getBloomGradient(variant);

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
        {/* Soft ambient bloom layer (radiant halo around card border) */}
        <div
          className="pointer-events-none absolute -inset-1px rounded-[inherit]"
          style={{
            opacity: "var(--active)",
            transition: `opacity ${movementDuration * 0.25}s ease`,
            background: bloomGradientStyle,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: `calc(var(--border-width) + 3px)`,
            filter: "blur(6px)",
          }}
        />

        {/* Crisp specular border highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: "var(--active)",
            transition: `opacity ${movementDuration * 0.25}s ease`,
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
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-25"
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
