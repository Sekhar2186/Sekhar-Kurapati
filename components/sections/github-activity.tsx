"use client";

import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Sekhar2186";

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const lightTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-100 dark:border-neutral-900/60">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
            Featured
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 text-neutral-900 dark:text-white">
            GitHub Activity
          </h2>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
        >
          View Profile
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Heatmap Card */}
      <div className="rounded-2xl px-10 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-6 overflow-x-auto">
        {mounted ? (
          <div className="min-w-[600px]">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme={isDark ? "dark" : "light"}
              theme={isDark ? darkTheme : lightTheme}
              fontSize={12}
              blockSize={13}
              blockRadius={3}
              blockMargin={3}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
              style={{
                color: isDark ? "#8b949e" : "#57606a",
                fontFamily: "inherit",
              }}
            />
          </div>
        ) : (
          /* Skeleton while waiting for theme resolution */
          <div className="min-w-[600px] h-36 animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        )}
      </div>
    </section>
  );
}
