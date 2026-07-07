import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/about";
import Footer from "@/components/layout/Footer";
import LightRays from "@/components/LightRays";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Sekhar Kurapati",
  description: "Learn about Soma Sekhar Kurapati – B.Tech student, AI/ML engineer, and full-stack developer.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200">
      {/* LightRays background — only on About page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-60 dark:opacity-45">
        <LightRays
          raysOrigin="top-center"
          raysColor="#22222"
          raysSpeed={0.6}
          lightSpread={0.8}
          rayLength={1.8}
          pulsating={false}
          fadeDistance={1.2}
          saturation={1.2}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.05}
        />
      </div>
      <Navbar />
      <main className="grow relative z-10">
        <About />
      </main>
      <Footer />
    </div>
  );
}
