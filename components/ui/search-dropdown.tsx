"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export type SearchItem = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  action?: () => void;
  keywords?: string[];
};

export type SearchGroup = {
  heading: string;
  items: SearchItem[];
};

interface SearchDropdownProps {
  groups?: SearchGroup[];
  placeholder?: string;
  shortcutKey?: string;
  /** Extra className on the trigger pill */
  triggerClassName?: string;
  /** Extra className on the dropdown panel */
  panelClassName?: string;
  /** Show ⌘K hint on the trigger */
  showShortcut?: boolean;
}

export function SearchDropdown({
  groups = [],
  placeholder = "Search pages, projects, actions…",
  shortcutKey = "k",
  triggerClassName,
  panelClassName,
  showShortcut = true,
}: SearchDropdownProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // ⌘K / Ctrl+K shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === shortcutKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down, { capture: true });
    return () => document.removeEventListener("keydown", down, { capture: true });
  }, [shortcutKey]);

  // Focus input when opened
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQuery("");
    }
  }, [open]);

  // Close on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <div ref={containerRef} className="relative z-50">
      {/* Trigger pill */}
      <button
        id="search-trigger"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open search"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors cursor-pointer",
          "border-neutral-200 dark:border-neutral-800",
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-500 dark:text-neutral-400",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800",
          "hover:text-neutral-700 dark:hover:text-neutral-200",
          triggerClassName,
        )}
      >
        <Search className="size-4 shrink-0" />
        <span className="flex-1 text-left whitespace-nowrap">Search…</span>
        {showShortcut && (
          <span className="flex items-center gap-0.5 ml-2">
            <kbd className="inline-flex items-center justify-center h-5 min-w-5 px-1 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
              ⌘
            </kbd>
            <kbd className="inline-flex items-center justify-center h-5 min-w-5 px-1 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
              K
            </kbd>
          </span>
        )}
      </button>

      {/* Full-screen blur backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10 dark:bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Dropdown panel — opens directly below trigger, above the backdrop */}
      {open && (
        <div
          className={cn(
            "absolute right-0 top-full mt-2 z-50",
            "w-110 rounded-2xl border overflow-hidden",
            "border-neutral-200 dark:border-neutral-800",
            "bg-white dark:bg-neutral-950",
            "shadow-lg shadow-black/10 dark:shadow-black/30",
            panelClassName,
          )}
        >
          <CommandPrimitive
            shouldFilter={true}
            className="flex flex-col"
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            {/* Search input row */}
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-neutral-100 dark:border-neutral-800">
              <Search className="size-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
              <CommandPrimitive.Input
                ref={inputRef}
                value={query}
                onValueChange={setQuery}
                placeholder={placeholder}
                className={cn(
                  "flex-1 bg-transparent text-sm outline-none",
                  "text-neutral-900 dark:text-neutral-100",
                  "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
                )}
              />
              {showShortcut && (
                <span className="flex items-center gap-0.5 shrink-0">
                  <kbd className="inline-flex items-center justify-center h-5 min-w-5 px-1 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">
                    ⌘
                  </kbd>
                  <kbd className="inline-flex items-center justify-center h-5 min-w-5 px-1 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">
                    K
                  </kbd>
                </span>
              )}
            </div>

            {/* Results */}
            <CommandPrimitive.List className="max-h-72 overflow-y-auto p-1.5">
              <CommandPrimitive.Empty className="py-6 text-center text-sm text-neutral-400 dark:text-neutral-500">
                No results found.
              </CommandPrimitive.Empty>

              {groups.map((group, gi) => (
                <React.Fragment key={gi}>
                  {gi > 0 && (
                    <CommandPrimitive.Separator className="my-1 h-px bg-neutral-100 dark:bg-neutral-800" />
                  )}
                  <CommandPrimitive.Group>
                    <div className="px-2 py-1.5 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                      {group.heading}
                    </div>
                    {group.items.map((item, ii) => (
                      <CommandPrimitive.Item
                        key={ii}
                        keywords={item.keywords}
                        value={item.label}
                        onSelect={() => {
                          if (item.action) {
                            run(item.action);
                          } else if (item.href) {
                            run(() => router.push(item.href!));
                          }
                        }}
                        className={cn(
                          "flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm cursor-pointer",
                          "text-neutral-700 dark:text-neutral-300",
                          "data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-900",
                          "data-[selected=true]:text-neutral-900 dark:data-[selected=true]:text-white",
                          "transition-colors",
                        )}
                      >
                        {item.icon && (
                          <item.icon className="size-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
                        )}
                        {item.label}
                      </CommandPrimitive.Item>
                    ))}
                  </CommandPrimitive.Group>
                </React.Fragment>
              ))}
            </CommandPrimitive.List>
          </CommandPrimitive>
        </div>
      )}
    </div>
  );
}
