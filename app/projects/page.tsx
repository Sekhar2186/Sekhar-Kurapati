import Navbar from "@/components/layout/Navbar";
import ProjectSection from "@/components/sections/projects";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Sekhar Kurapati",
  description: "Explore portfolio projects in AI/ML, NLP, Computer Vision, Full-Stack, and Data Science built by Sekhar Kurapati.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <main className="grow">
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
}
