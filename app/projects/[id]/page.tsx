import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check, Sparkles, Code2, Database, Bot } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { Github } from "@/components/ui/icons";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} – Sekhar Kurapati`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

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

  const getStatusBadgeClass = (status?: string) => {
    switch (status) {
      case "Building":
        return "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/40";
      case "Completed":
        return "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/40";
      default:
        return "bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-900/40";
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />

      <main className="grow max-w-4xl mx-auto px-6 py-24 md:py-32 w-full">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-purple-500 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl border border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950/80 p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Ambient light inside card */}
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(
                project.category
              )}`}
            >
              {getCategoryIcon(project.category)}
              {project.category}
            </span>
            {project.status && (
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeClass(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mt-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mt-6">
            {project.description}
          </p>

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div className="mt-10 pt-8 border-t border-neutral-100 dark:border-neutral-900/60">
              <h2 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                Project Overview
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-10 pt-8 border-t border-neutral-100 dark:border-neutral-900/60">
              <h2 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <span className="shrink-0 mt-0.5 p-0.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-500 dark:text-purple-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-10 pt-8 border-t border-neutral-100 dark:border-neutral-900/60">
            <h2 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-50 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-900">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-bold transition-colors w-full sm:w-auto cursor-pointer"
            >
              <Github className="h-4.5 w-4.5" />
              View Repository
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold transition-colors w-full sm:w-auto shadow-md shadow-purple-500/20 cursor-pointer"
              >
                <ExternalLink className="h-4.5 w-4.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
