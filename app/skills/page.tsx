import Navbar from "@/components/layout/Navbar";
import Skills from "@/components/sections/skills";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills – Sekhar Kurapati",
  description: "Technologies and tools I work with — Python, React, Next.js, AI/ML, and more.",
};

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <main className="grow">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
