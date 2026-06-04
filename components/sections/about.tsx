import Image from "next/image";
import { GraduationCap, Brain, Target } from "lucide-react";
import { TechIcon } from "@/components/ui/tech-icon";

export default function About() {
    const cards = [
        {
            icon: GraduationCap,
            title: "Education",
            description: "B.Tech student passionate about Artificial Intelligence, Machine Learning and Software Development.",
            years: "2023 - Present",
            school: "Indian Institute of Information Technology"
        },
        {
            icon: Brain,
            title: "Current Focus",
            description: "Deep Learning, Computer Vision, LLMs, Agentic AI Systems and Full Stack Development.",
        },
        {
            icon: Target,
            title: "Career Goal",
            description: "To become an AI Engineer building intelligent products that solve real-world problems.",
        },
    ];

    const tools = [
        "pnpm", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL",
        "FastAPI", "Git", "Docker", "CI/CD", "Turbo", "LangChain", "LangGraph"
    ];

    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
            <div className="text-center mb-16">
                <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
                    ABOUT ME
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-white">
                    Who Am I?
                </h2>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                {/* Photo Column */}
                <div className="lg:col-span-4 flex justify-center">
                    <div className="relative group">
                        {/* Ambient glow behind image */}
                        <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-600 to-indigo-600 opacity-20 blur-lg group-hover:opacity-40 transition duration-300" />
                        <div className="relative w-[320px] h-[380px] overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src="/sekhar.png"
                                alt="Sekhar Kurapati"
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* About Matter Column */}
                <div className="lg:col-span-8 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white leading-tight">
                        I Build <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">AI That Ships</span>
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed text-base">
                        From interactive front-end experiences to backend systems and machine learning models, I enjoy exploring how ideas turn into working software. I care about clean design, thoughtful interactions, and code that’s easy to understand and scale.
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed text-base">
                        My interests include full-stack web development, machine learning, and building interactive applications with a strong focus on usability and user experience. I believe effective software should combine reliable functionality with simplicity and intuitive design.
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed text-base">
                        I enjoy learning new technologies, experimenting with ideas, and continuously strengthening my skills through hands-on, project-based work.
                    </p>

                    {/* Tooling section */}
                    <div className="pt-4">
                        <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                            Latest Tools &amp; Technologies I Use
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <div
                                    key={tool}
                                    className="relative group flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 cursor-default
                                        bg-white dark:bg-neutral-950/80
                                        border-neutral-150 dark:border-neutral-900/60
                                        hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/5 hover:-translate-y-1"
                                >
                                    <TechIcon name={tool} className="w-7 h-7" />
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2.5 py-1.5 bg-neutral-950 dark:bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none whitespace-nowrap z-50 border border-neutral-800">
                                        {tool}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-950 dark:border-t-neutral-900" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-3xl border p-8 transition-all duration-300 group hover:-translate-y-1.5
                                bg-white dark:bg-neutral-950/80
                                border-neutral-150 dark:border-neutral-900
                                shadow-sm dark:shadow-none"
                        >
                            <div className="w-14 h-14 rounded-xl bg-purple-500/10 dark:bg-purple-500/5 flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-purple-500" />
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                {card.title}
                            </h3>

                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                {card.description}
                            </p>
                            {card.school && (
                                <div className="mt-4 pt-4 border-t border-neutral-150 dark:border-neutral-800/80 text-xs text-neutral-400 dark:text-neutral-500">
                                    <span className="font-semibold">{card.school}</span>
                                    <span className="block mt-0.5">{card.years}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}