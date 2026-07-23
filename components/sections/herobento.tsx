import { ArrowRight, MapPin, Bot, Code2, Database, Terminal, Briefcase } from "lucide-react";
import Link from "next/link";
import TextType from "@/components/TextType";

export default function HeroBento() {
    return (
        <section className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] relative z-10">

                {/* Main Intro Card (Spans 2 cols, 2 rows on lg) */}
                <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 md:p-10 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for work
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-neutral-900 dark:text-white mb-4">
                            Build Your Next Idea with{" "}
                            <span className="text-neutral-600 dark:text-neutral-400">
                                <TextType
                                    text={["Sekhar Kurapati"]}
                                    typingSpeed={60}
                                    initialDelay={300}
                                    loop={false}
                                    showCursor={true}
                                    cursorCharacter="|"
                                    cursorClassName="text-neutral-900 dark:text-white"
                                    variableSpeed={undefined}
                                    onSentenceComplete={undefined}
                                />
                            </span>
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-8 max-w-md">
                            Designing robust backend architectures, building autonomous AI integrations, and crafting responsive user interfaces.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Get In Touch
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="Resume_Sekhar.pdf"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border transition-all bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                            >
                                Resume/CV
                            </Link>
                        </div>
                    </div>
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px', color: 'gray' }}></div>
                </div>

                {/* AI Card */}
                <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-4 text-neutral-700 dark:text-neutral-300">
                        <Bot className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Artificial Intelligence</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Autonomous LLM workflows and custom integrations.</p>
                    </div>
                </div>

                {/* Data Science Card */}
                <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-4 text-neutral-700 dark:text-neutral-300">
                        <Database className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Data Science</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Predictive models and actionable business insights.</p>
                    </div>
                </div>

                {/* Location / Meta Card */}
                <div className="md:col-span-1 p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-neutral-400 mb-3" />
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Global Scope</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Remote & Ready</p>
                </div>

                {/* Portfolio Projects Card */}
                <div className="md:col-span-1 p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-neutral-400 mb-3" />
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">6+ Projects</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Built & Deployed</p>
                </div>

                {/* Full Stack / Tech Stack Card (Spans full width now) */}
                <div className="md:col-span-3 lg:col-span-4 p-6 md:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white flex flex-col gap-5 hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
                    <div className="flex items-center gap-3">
                        <Code2 className="h-6 w-6 text-neutral-700 dark:text-neutral-300 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold">Full-Stack Development</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                                From backend to frontend — the full picture.
                            </p>
                        </div>
                    </div>

                    {/* Dual-row infinite marquee */}
                    <div className="flex flex-col gap-3 relative">
                        {/* Left fade */}
                        <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-neutral-100 dark:from-neutral-900 to-transparent z-10 pointer-events-none" />
                        {/* Right fade */}
                        <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-neutral-100 dark:from-neutral-900 to-transparent z-10 pointer-events-none" />

                        {/* Row 1 — scrolls LEFT */}
                        <div className="overflow-hidden">
                            <div className="flex gap-3 animate-[marquee-left_22s_linear_infinite] w-max">
                                {[
                                    { label: "React", color: "#61DAFB", icon: "⚛️" },
                                    { label: "Next.js", color: "#E5E5E5", icon: "▲" },
                                    { label: "TypeScript", color: "#3178C6", icon: "TS" },
                                    { label: "Python", color: "#F7C948", icon: "🐍" },
                                    { label: "FastAPI", color: "#009688", icon: "⚡" },
                                    { label: "TailwindCSS", color: "#06B6D4", icon: "🌊" },
                                    { label: "React", color: "#61DAFB", icon: "⚛️" },
                                    { label: "Next.js", color: "#E5E5E5", icon: "▲" },
                                    { label: "TypeScript", color: "#3178C6", icon: "TS" },
                                    { label: "Python", color: "#F7C948", icon: "🐍" },
                                    { label: "FastAPI", color: "#009688", icon: "⚡" },
                                    { label: "TailwindCSS", color: "#06B6D4", icon: "🌊" },
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shrink-0">
                                        <span className="text-sm font-bold" style={{ color: tech.color }}>{tech.icon}</span>
                                        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">{tech.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 — scrolls RIGHT */}
                        <div className="overflow-hidden">
                            <div className="flex gap-3 animate-[marquee-right_26s_linear_infinite] w-max">
                                {[
                                    { label: "LangChain", color: "#1E88E5", icon: "🔗" },
                                    { label: "PostgreSQL", color: "#336791", icon: "🐘" },
                                    { label: "Docker", color: "#2496ED", icon: "🐳" },
                                    { label: "Node.js", color: "#339933", icon: "⬢" },
                                    { label: "PyTorch", color: "#EE4C2C", icon: "🔥" },
                                    { label: "LangGraph", color: "#8B5CF6", icon: "🕸️" },
                                    { label: "LangChain", color: "#1E88E5", icon: "🔗" },
                                    { label: "PostgreSQL", color: "#336791", icon: "🐘" },
                                    { label: "Docker", color: "#2496ED", icon: "🐳" },
                                    { label: "Node.js", color: "#339933", icon: "⬢" },
                                    { label: "PyTorch", color: "#EE4C2C", icon: "🔥" },
                                    { label: "LangGraph", color: "#8B5CF6", icon: "🕸️" },
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shrink-0">
                                        <span className="text-sm font-bold" style={{ color: tech.color }}>{tech.icon}</span>
                                        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">{tech.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
