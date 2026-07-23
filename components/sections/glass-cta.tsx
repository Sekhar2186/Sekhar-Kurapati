import { ArrowRight, Bot, Code2, Database } from "lucide-react";
import Link from "next/link";

export default function GlassCTA() {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-24 mt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-neutral-900 dark:bg-neutral-950 -z-20"></div>

            {/* Subtle glows */}
            <div className="absolute top-[10%] left-[20%] w-72 h-72 rounded-full bg-slate-500/20 blur-[100px] -z-10 mix-blend-screen animate-pulse duration-8000"></div>
            <div className="absolute bottom-[10%] right-[20%] w-80 h-80 rounded-full bg-slate-400/20 blur-[100px] -z-10 mix-blend-screen animate-pulse duration-10000"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-8">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                    Available for New Projects
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
                    Ready to build something <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-500">extraordinary?</span>
                </h2>

                <p className="text-lg text-neutral-300 max-w-2xl mb-10">
                    Whether you need a robust full-stack platform, an intelligent AI agent, or a complex data pipeline—let's make it happen.
                </p>

                <div className="flex flex-wrap justify-center gap-4 items-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-neutral-900 font-bold shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        Start a Conversation
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>

            {/* Decorative Floating Glass Cards */}
            <div className="hidden lg:block absolute top-12 left-12 w-48 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transform -rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 z-10">
                <Bot className="h-6 w-6 text-white mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">AI Agents</h3>
                <p className="text-xs text-neutral-300">Custom LLM workflows</p>
            </div>

            <div className="hidden lg:block absolute bottom-12 left-32 w-52 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 z-10">
                <Code2 className="h-6 w-6 text-white mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">Full-Stack</h3>
                <p className="text-xs text-neutral-300">Scalable web platforms</p>
            </div>

            <div className="hidden lg:block absolute top-24 right-16 w-48 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transform rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 z-10">
                <Database className="h-6 w-6 text-white mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">Data Science</h3>
                <p className="text-xs text-neutral-300">Predictive modeling</p>
            </div>
        </section>
    );
}
