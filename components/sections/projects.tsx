"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Code2, Sparkles, Database, Bot } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects, Project } from "@/data/projects";

const categories = ["All", "AI/ML", "Full Stack", "Data Science", "Agentic AI"];

export default function ProjectSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const router = useRouter();

    const filteredProjects = projects.filter(project =>
        selectedCategory === "All" || project.category === selectedCategory
    );

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "AI/ML":
                return <Sparkles className="h-4 w-4" />;
            case "Full Stack":
                return <Code2 className="h-4 w-4" />;
            case "Data Science":
                return <Database className="h-4 w-4" />;
            case "Agentic AI":
                return <Bot className="h-4 w-4" />;
            default:
                return null;
        }
    };

    const getCategoryBadgeClass = (category: string) => {
        switch (category) {
            case "AI/ML":
                return "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60";
            case "Full Stack":
                return "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/60";
            case "Data Science":
                return "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900/60";
            case "Agentic AI":
                return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/60";
            default:
                return "bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-100 dark:border-neutral-800";
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
                    Projects
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-white">
                    Featured Work
                </h2>
                <p className="mt-5 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                    A collection of projects showcasing AI/ML applications, full-stack websites, and medical image computing.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((category) => {
                    const isActive = category === selectedCategory;
                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold border flex items-center gap-2 transition-all duration-200 cursor-pointer
                                ${isActive
                                    ? "bg-purple-500 border-purple-500 text-white shadow-md shadow-purple-500/20"
                                    : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                                }`}
                        >
                            {getCategoryIcon(category)}
                            <span>{category}</span>
                        </button>
                    );
                })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project: Project) => (
                    <div
                        key={project.id}
                        onClick={() => router.push(`/projects/${project.id}`)}
                        className="relative flex flex-col rounded-3xl border p-7 transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer
                            bg-white dark:bg-neutral-950/80
                            border-neutral-100 dark:border-neutral-900
                            shadow-sm dark:shadow-none"
                    >
                        {/* Glowing border effect */}
                        <GlowingEffect
                            spread={40}
                            proximity={80}
                            inactiveZone={0.1}
                            borderWidth={1.5}
                            movementDuration={1.5}
                        />

                        {/* Tag/Category Line */}
                        <div className="flex items-center justify-between mb-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(project.category)}`}>
                                {getCategoryIcon(project.category)}
                                {project.category}
                            </span>
                            {project.featured && (
                                <span className="text-xs font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-md border border-amber-100 dark:border-amber-900/40">
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-purple-500 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 grow">
                            {project.description}
                        </p>

                        {/* Tech Stack tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-50 dark:bg-neutral-900/60 text-neutral-500 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-900">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors cursor-pointer"
                            >
                                <Github className="h-4 w-4" />
                                Code
                            </a>
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors cursor-pointer"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}