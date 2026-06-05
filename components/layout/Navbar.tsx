"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { GooeyInput } from '@/components/ui/search-button';
import { projects } from '@/data/projects';

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownRefMobile = useRef<HTMLDivElement>(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedOutsideDesktop = !dropdownRef.current || !dropdownRef.current.contains(event.target as Node);
            const clickedOutsideMobile = !dropdownRefMobile.current || !dropdownRefMobile.current.contains(event.target as Node);
            if (clickedOutsideDesktop && clickedOutsideMobile) {
                setSearchQuery("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isDark = theme === "dark";
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    const filteredProjects = searchQuery.trim() === ""
        ? []
        : projects.filter(project =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );

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

                {/* Center Menu */}
                <div className="hidden md:flex items-center gap-8 px-8 py-2.5 rounded-xl backdrop-blur-md
                    bg-neutral-100/80 dark:bg-neutral-900/60
                    border border-neutral-200 dark:border-neutral-800/80
                    shadow-sm dark:shadow-lg dark:shadow-black/20">
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

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-3">
                    <div ref={dropdownRef} className="relative">
                        <div className="flex h-12 items-center justify-center">
                            <GooeyInput
                                placeholder="Search..."
                                value={searchQuery}
                                onValueChange={setSearchQuery}
                            />
                        </div>
                        {searchQuery.trim() !== "" && (
                            <div className="absolute right-0 top-14 w-80 max-h-96 overflow-y-auto rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-2xl p-2.5 z-50 flex flex-col gap-1.5 transition-all">
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <button
                                            key={project.id}
                                            onClick={() => {
                                                setSearchQuery("");
                                                router.push(`/projects/${project.id}`);
                                            }}
                                            className="w-full flex flex-col text-left p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer group"
                                        >
                                            <span className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-purple-500 transition-colors">
                                                {project.title}
                                            </span>
                                            <span className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                                                {project.description}
                                            </span>
                                            <span className="text-[10px] uppercase font-extrabold tracking-wider text-purple-500 dark:text-purple-400 mt-1">
                                                {project.category}
                                            </span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="text-center py-6 text-sm text-neutral-500 dark:text-neutral-400">
                                        No results for &quot;{searchQuery}&quot;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-lg border transition-all
                            bg-white dark:bg-neutral-950
                            border-neutral-200 dark:border-neutral-800
                            text-neutral-500 dark:text-neutral-400
                            hover:bg-neutral-50 dark:hover:bg-neutral-900
                            hover:border-neutral-300 dark:hover:border-neutral-700
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

                {/* Mobile Actions: Search & Hamburger */}
                <div className="flex items-center gap-2 md:hidden">
                    <div ref={dropdownRefMobile} className="relative">
                        <div className="flex h-12 items-center justify-center">
                            <GooeyInput
                                placeholder="Search..."
                                value={searchQuery}
                                onValueChange={setSearchQuery}
                                collapsedWidth={40}
                                expandedWidth={160}
                                expandedOffset={0}
                            />
                        </div>
                        {searchQuery.trim() !== "" && (
                            <div className="absolute right-0 top-14 w-72 max-h-96 overflow-y-auto rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-2xl p-2.5 z-50 flex flex-col gap-1.5 transition-all">
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <button
                                            key={project.id}
                                            onClick={() => {
                                                setSearchQuery("");
                                                router.push(`/projects/${project.id}`);
                                            }}
                                            className="w-full flex flex-col text-left p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer group"
                                        >
                                            <span className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-purple-500 transition-colors">
                                                {project.title}
                                            </span>
                                            <span className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                                                {project.description}
                                            </span>
                                            <span className="text-[10px] uppercase font-extrabold tracking-wider text-purple-500 dark:text-purple-400 mt-1">
                                                {project.category}
                                            </span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="text-center py-6 text-sm text-neutral-500 dark:text-neutral-400">
                                        No results for &quot;{searchQuery}&quot;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

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
                    shadow-lg dark:shadow-2xl">
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
                                    text-white dark:text-white
                                    border border-neutral-800
                                    hover:bg-neutral-800 dark:hover:bg-neutral-800"
                            >
                                Let's Talk
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
