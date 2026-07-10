"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, User, Zap, Briefcase, Mail, FolderOpen } from 'lucide-react';
import { useTheme } from 'next-themes';
import { SearchDropdown } from '@/components/ui/search-dropdown';
import { projects } from '@/data/projects';

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Skills", href: "/skills", icon: Zap },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => setMounted(true), []);


    const isDark = theme === "dark";
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    const searchGroups = [
        {
            heading: "Navigation",
            items: links.map((link) => ({
                label: link.name,
                icon: link.icon,
                href: link.href,
                keywords: [link.name.toLowerCase()],
            })),
        },
        {
            heading: "Projects",
            items: projects.map((project) => ({
                label: project.title,
                icon: FolderOpen,
                href: `/projects/${project.id}`,
                keywords: [project.category.toLowerCase(), ...project.tags.map(t => t.toLowerCase())],
            })),
        },
    ];

    return (
        <header className="w-full px-6 py-5 md:px-12 relative z-50">
            <nav className="mx-auto max-w-7xl flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded
                        bg-neutral-900 dark:bg-neutral-900
                        border border-neutral-700 dark:border-neutral-800
                        flex items-center justify-center font-bold text-white text-lg
                        transition-transform group-hover:scale-105">
                        S
                    </div>
                    <span className="font-bold text-xl tracking-tight
                        text-neutral-900 dark:text-white
                        transition-opacity group-hover:opacity-80">
                        Sekhar <span className="text-neutral-400">Kurapati</span>
                    </span>
                </Link>

                {/* Center Nav Links */}
                <div className="hidden md:flex items-center gap-8 px-8 py-2.5 rounded-xl
                    bg-neutral-100 dark:bg-neutral-900
                    border border-neutral-200 dark:border-neutral-800
                    shadow-sm dark:shadow-none">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition-colors duration-150
                                text-neutral-500 dark:text-neutral-400
                                hover:text-neutral-900 dark:hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side — desktop */}
                <div className="hidden md:flex items-center gap-3">
                    <SearchDropdown
                        groups={searchGroups}
                        placeholder="Search pages, projects, actions…"
                        shortcutKey="k"
                        showShortcut={true}
                        triggerClassName="w-52"
                    />

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-lg border transition-all
                            bg-neutral-50 dark:bg-neutral-900
                            border-neutral-200 dark:border-neutral-800
                            text-neutral-500 dark:text-neutral-400
                            hover:bg-neutral-100 dark:hover:bg-neutral-800
                            hover:text-neutral-900 dark:hover:text-white"
                    >
                        {mounted ? (
                            isDark
                                ? <Sun className="h-4 w-4 text-yellow-400" />
                                : <Moon className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </button>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <SearchDropdown
                        groups={searchGroups}
                        placeholder="Search…"
                        shortcutKey="k"
                        showShortcut={false}
                        triggerClassName="w-auto"
                        panelClassName="w-72 right-0"
                    />

                    <button
                        className="p-2 transition-colors text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 p-5 rounded-xl
                    bg-white dark:bg-neutral-950
                    border border-neutral-100 dark:border-neutral-900
                    shadow-lg">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium transition-colors
                                    text-neutral-600 dark:text-neutral-300
                                    hover:text-neutral-900 dark:hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-neutral-100 dark:border-neutral-900 my-1" />
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors
                                    bg-neutral-900 dark:bg-neutral-900
                                    text-white
                                    border border-neutral-800
                                    hover:bg-neutral-800"
                            >
                                Let&apos;s Talk
                            </Link>
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2.5 rounded-lg border transition-colors
                                    bg-white dark:bg-neutral-950
                                    border-neutral-200 dark:border-neutral-800
                                    text-neutral-500 dark:text-neutral-400
                                    hover:text-neutral-900 dark:hover:text-white"
                            >
                                {mounted ? (
                                    isDark
                                        ? <Sun className="h-4 w-4 text-yellow-400" />
                                        : <Moon className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
