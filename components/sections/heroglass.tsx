import { ArrowRight, Bot, Code2, Database } from "lucide-react";
import Link from "next/link";
import TextType from "@/components/TextType";

export default function HeroGlass() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements (Subtle, non-radical, premium feel) */}
            <div className="absolute inset-0 w-full h-full bg-neutral-50 dark:bg-neutral-950 -z-20"></div>
            
            {/* Soft, sophisticated glowing orbs (Slate/Gray/Subtle Blue) */}
            <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] max-w-125 max-h-125 rounded-full bg-slate-300/30 dark:bg-slate-800/30 blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen animate-pulse duration-8000"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] max-w-100 max-h-100 rounded-full bg-neutral-300/40 dark:bg-neutral-800/40 blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen animate-pulse duration-10000"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10">
                
                {/* Left Column: Text */}
                <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-sm text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-8">
                        <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white animate-pulse"></span>
                        Engineering the Future
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-neutral-900 dark:text-white mb-6">
                        Build Your Next <br />
                        <span className="text-neutral-400 dark:text-neutral-500">
                            <TextType
                                text={["Vision.", "Product.", "Platform."]}
                                typingSpeed={80}
                                initialDelay={300}
                                loop={true}
                                showCursor={true}
                                cursorCharacter="|"
                                variableSpeed={undefined}
                                onSentenceComplete={undefined}
                            />
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-10">
                        I am <span className="font-semibold text-neutral-900 dark:text-white">Sekhar Kurapati</span>. A Full-Stack & AI Engineer designing robust backend architectures and autonomous intelligent systems.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neutral-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-neutral-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Let's Collaborate
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="Resume_Sekhar.pdf"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/50 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300 shadow-sm"
                        >
                            View Resume
                        </Link>
                    </div>
                </div>

                {/* Right Column: Floating Glass Cards */}
                <div className="lg:col-span-5 relative h-125 w-full hidden md:block perspective-[1000px]">
                    {/* Glass Card 1: AI */}
                    <div className="absolute top-10 right-0 w-72 p-6 rounded-2xl bg-white/30 dark:bg-neutral-900/30 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:rotate-2 transition-all duration-500 z-30">
                        <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center mb-4">
                            <Bot className="h-5 w-5 text-white dark:text-neutral-900" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Autonomous AI</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Custom LLM agents & advanced prompt engineering workflows.</p>
                    </div>

                    {/* Glass Card 2: Full Stack */}
                    <div className="absolute top-44 left-0 w-72 p-6 rounded-2xl bg-white/40 dark:bg-neutral-800/40 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:-rotate-2 transition-all duration-500 z-20">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-200 flex items-center justify-center mb-4">
                            <Code2 className="h-5 w-5 text-white dark:text-neutral-900" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Full-Stack Scale</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">High-performance Next.js frontends and scalable microservices.</p>
                    </div>

                    {/* Glass Card 3: Data Science */}
                    <div className="absolute bottom-10 right-10 w-72 p-6 rounded-2xl bg-white/20 dark:bg-neutral-950/20 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 z-10">
                        <div className="w-10 h-10 rounded-full bg-neutral-700 dark:bg-neutral-300 flex items-center justify-center mb-4">
                            <Database className="h-5 w-5 text-white dark:text-neutral-900" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Data Intelligence</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Predictive analytics and comprehensive machine learning pipelines.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
