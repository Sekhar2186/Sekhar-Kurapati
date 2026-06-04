import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/about";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Sekhar Kurapati",
  description: "Learn about Soma Sekhar Kurapati – B.Tech student, AI/ML engineer, and full-stack developer.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <main className="grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
