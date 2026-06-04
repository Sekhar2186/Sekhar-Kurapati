"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Suppress the React 19 "Encountered a script tag" false-positive warning.
// next-themes intentionally injects a script for SSR theme detection (no-flash).
// This is safe — React 19 simply isn't aware of this pattern yet.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const orig = console.error.bind(console);
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    orig(...args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
