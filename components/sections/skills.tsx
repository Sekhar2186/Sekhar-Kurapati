"use client";

import { useState } from "react";
import { TechIcon } from "@/components/ui/tech-icon";

const skillCategories = [
  {
    label: "Languages",
    color: "indigo",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "HTML & CSS"],
  },
  {
    label: "Frontend",
    color: "purple",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML & CSS"],
  },
  {
    label: "Backend & APIs",
    color: "pink",
    skills: ["Node.js", "FastAPI", "Django", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    label: "AI / ML",
    color: "violet",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "LangGraph", "OpenCV", "Hugging Face", "Pandas", "NumPy"],
  },
  {
    label: "Tools",
    color: "blue",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "pnpm", "Turbo", "MongoDB", "Redis"],
  },
];

const colorMap: Record<string, { badge: string }> = {
  indigo: { badge: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
  purple: { badge: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  pink: { badge: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  violet: { badge: "bg-violet-500/10 text-violet-500 border-violet-500/20" },
  blue: { badge: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
};

// Extras shown as icon tiles in the "Also familiar with" section
const extraTools = [
  // User requested
  "Kaggle", "Firebase", "Supabase", "GitHub", "Jupyter",
  // Additional
  "Streamlit", "Google Colab", "Ollama",
  "Postman", "Notion", "Flask", "Prisma",
];

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].label);
  const current = skillCategories.find((c) => c.label === active)!;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
          What I Work With
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-white">
          Skills &amp; Technologies
        </h2>
        <p className="mt-5 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
          A toolkit built through hands-on projects, competitions, and continuous learning.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {skillCategories.map((cat) => {
          const c = colorMap[cat.color];
          const isActive = cat.label === active;
          return (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer
                ${isActive
                  ? `${c.badge} border`
                  : "bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-60">{cat.skills.length}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {current.skills.map((skillName) => (
          <div
            key={skillName}
            className="relative group flex flex-col items-center justify-center p-6 rounded-3xl border transition-all duration-300 w-28 h-28 cursor-default
              bg-white dark:bg-neutral-950/80
              border-neutral-150 dark:border-neutral-900/60
              hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/5 hover:-translate-y-1"
          >
            <TechIcon name={skillName} className="w-10 h-10" />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 px-3 py-1.5 bg-neutral-950 dark:bg-neutral-900 text-white dark:text-neutral-200 text-xs font-semibold rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none whitespace-nowrap z-50 border border-neutral-800">
              {skillName}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-950 dark:border-t-neutral-900" />
            </div>
          </div>
        ))}
      </div>

      {/* Also Familiar With — icon tiles */}
      <div className="mt-20">
        <p className="text-center text-neutral-400 dark:text-neutral-500 text-sm mb-8 uppercase tracking-widest font-semibold">
          Also familiar with
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {extraTools.map((tool) => (
            <div
              key={tool}
              className="relative group flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 cursor-default
                bg-white dark:bg-neutral-950/80
                border-neutral-150 dark:border-neutral-900/60
                hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/5 hover:-translate-y-1"
            >
              <TechIcon name={tool} className="w-7 h-7" />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2.5 py-1.5 bg-neutral-950 dark:bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none whitespace-nowrap z-50 border border-neutral-800">
                {tool}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-950 dark:border-t-neutral-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
