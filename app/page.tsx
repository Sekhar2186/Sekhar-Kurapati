"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero";
import HeroBento from "@/components/sections/herobento";
import HeroGlass from "@/components/sections/heroglass";
import GlassCTA from "@/components/sections/glass-cta";
import Footer from "@/components/layout/Footer";
import { projects, Project } from "@/data/projects";
import { ArrowRight, ExternalLink, Sparkles, Code2, Database, Bot } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import TechStack from "@/components/sections/tech-stack";
import GithubActivity from "@/components/sections/github-activity";
import { BackgroundLines } from "@/components/ui/background-lines";

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
    return "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800";
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />

      <main className="grow">
        {/* Hero Section */}
        {/*<Hero />*/}
        {/*<HeroBento />*/}
        <HeroBento />
        {/*<HeroGlass />*/}

        {/* Featured Projects Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-100 dark:border-neutral-900/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors group"
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
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
          <div className="rounded-3xl text-center relative overflow-hidden border
            bg-neutral-50 dark:bg-neutral-900/40
            border-neutral-150 dark:border-neutral-900
            shadow-sm dark:shadow-none">
            <BackgroundLines className="py-8 md:py-12 px-8 md:px-12">
              <span className="relative z-10 text-neutral-600 dark:text-neutral-400 font-semibold text-xs uppercase tracking-widest">
                Available For Work
              </span>
              <h2 className="relative z-10 text-3xl md:text-4xl font-bold mt-4 max-w-xl mx-auto text-neutral-900 dark:text-white">
                Let&apos;s Build Something Intelligent Together
              </h2>
              <p className="relative z-10 mt-4 text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                If you need an autonomous agent integration, full stack developer, or deep learning model pipeline, let&apos;s start the conversation.
              </p>
              <div className="relative z-10 mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-colors"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {/* Soft Ambient decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-neutral-500/5 blur-3xl pointer-events-none -z-10" />
            </BackgroundLines>
          </div>
        </section>

        {/* Creative Glass CTA Section */}
        {/*<GlassCTA />*/}
      </main>

      <Footer />
    </div>
  );
}
