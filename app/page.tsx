"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero";
import Footer from "@/components/layout/Footer";
import { projects, Project } from "@/data/projects";
import { ArrowRight, ExternalLink, Sparkles, Code2, Database, Bot } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import TechStack from "@/components/sections/tech-stack";
import GithubActivity from "@/components/sections/github-activity";

export default function Home() {
  // Get top 3 featured projects
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const router = useRouter();

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
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />

      <main className="grow">
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-100 dark:border-neutral-900/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
                Portfolios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-500 hover:text-purple-600 transition-colors group"
            >
              Explore All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
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

                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-purple-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-50 dark:bg-neutral-900/60 text-neutral-500 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-50 dark:bg-neutral-900/60 text-neutral-400 dark:text-neutral-500 border border-neutral-100 dark:border-neutral-800">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

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
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        {/*<TechStack />*/}

        {/* GitHub Activity Section */}
        <GithubActivity />

        {/* CTA Banner Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border
            bg-neutral-50 dark:bg-neutral-900/40
            border-neutral-150 dark:border-neutral-900
            shadow-sm dark:shadow-none">
            <span className="text-purple-500 font-semibold text-xs uppercase tracking-widest">
              Available For Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 max-w-xl mx-auto text-neutral-900 dark:text-white">
              Let&apos;s Build Something Intelligent Together
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              If you need an autonomous agent integration, full stack developer, or deep learning model pipeline, let&apos;s start the conversation.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Soft Ambient decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none -z-10" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
