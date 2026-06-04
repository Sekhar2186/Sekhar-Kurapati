import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Sekhar Kurapati",
  description: "Get in touch with Sekhar Kurapati – B.Tech student, AI/ML engineer, and software developer. Let's build something intelligent together.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <main className="grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
