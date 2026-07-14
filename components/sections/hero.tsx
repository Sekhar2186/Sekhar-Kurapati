import { Sparkles, ArrowRight, Target, Code2, Database, Bot } from "lucide-react";
import Link from "next/link";
import TextType from "@/components/TextType";

export default function Hero() {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">

                {/* Left Column */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">

                    {/* Badge 
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-6">
                        <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                        <span>AI-Powered Full Stack Engineer</span>
                    </div>
                    */}

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-neutral-900 dark:text-white max-w-2xl">
                        Build Your Next Big Idea with{" "}
                        <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            <TextType
                                text={["Sekhar Kurapati"]}
                                typingSpeed={60}
                                initialDelay={300}
                                loop={false}
                                showCursor={true}
                                cursorCharacter="|"
                                cursorClassName="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                variableSpeed={undefined}
                                onSentenceComplete={undefined}
                            />
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
                        The ultimate developer for your vision. Designing robust backend architectures, building autonomous AI agent integrations, and crafting responsive frontend user interfaces.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex gap-3 md:gap-4 items-center w-full md:w-auto">
                        <Link
                            href="Resume_Sekhar.pdf"
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-3 md:px-6 md:py-3 rounded-lg bg-neutral-900 dark:bg-gray-200 text-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex-1 md:flex-none text-xs sm:text-sm md:text-base text-center"
                        >
                            <span className="whitespace-nowrap">Resume/CV</span>
                            <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-3 py-3 md:px-6 md:py-3 rounded-lg font-semibold border transition-all
                                bg-white dark:bg-transparent
                                text-neutral-700 dark:text-neutral-300
                                border-neutral-200 dark:border-neutral-800
                                hover:bg-neutral-50 dark:hover:bg-neutral-900
                                hover:border-neutral-300 dark:hover:border-neutral-700
                                flex-1 md:flex-none text-xs sm:text-sm md:text-base text-center whitespace-nowrap"
                        >
                            Get In Touch!
                        </Link>
                    </div>

                    {/* Social Proof 
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-neutral-700 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-300">JS</div>
                            <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-neutral-600 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-200">TS</div>
                            <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-neutral-500 dark:bg-neutral-600 flex items-center justify-center text-xs font-bold text-white">PY</div>
                            <div className="w-9 h-9 rounded-full border-2 border-white dark:border-black bg-neutral-400 dark:bg-neutral-500 flex items-center justify-center text-xs font-bold text-white">AI</div>
                        </div>
                        <p className="text-sm text-neutral-400 dark:text-neutral-500">
                            Trusted by tech teams &amp; startups.
                        </p>
                    </div>
                    */}
                </div>

                {/* Right Column (Stacked Cards) */}
                <div className="lg:col-span-5 flex flex-col gap-5 w-full">

                    {/* Card 1 */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl
                        bg-white dark:bg-neutral-950/80
                        border border-neutral-100 dark:border-neutral-900
                        hover:border-neutral-200 dark:hover:border-neutral-800
                        shadow-sm dark:shadow-none
                        transition-all hover:translate-x-1 duration-200 group">
                        <div className="p-3 rounded-xl bg-indigo-50 dark:bg-neutral-900 text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/40 transition-all">
                            <Bot className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Artficial Inteliigence</h3>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                Deploying autonomous AI agents, LLM integrations, and custom prompt workflows that automate complex tasks.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl
                        bg-white dark:bg-neutral-950/80
                        border border-neutral-100 dark:border-neutral-900
                        hover:border-neutral-200 dark:hover:border-neutral-800
                        shadow-sm dark:shadow-none
                        transition-all hover:translate-x-1 duration-200 group">
                        <div className="p-3 rounded-xl bg-purple-50 dark:bg-neutral-900 text-purple-500 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-950/40 transition-all">
                            <Code2 className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Full-Stack Development</h3>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                Building responsive frontend designs with React/Next.js alongside clean, scalable APIs and microservices.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl
                        bg-white dark:bg-neutral-950/80
                        border border-neutral-100 dark:border-neutral-900
                        hover:border-neutral-200 dark:hover:border-neutral-800
                        shadow-sm dark:shadow-none
                        transition-all hover:translate-x-1 duration-200 group">
                        <div className="p-3 rounded-xl bg-pink-50 dark:bg-neutral-900 text-pink-500 dark:text-pink-400 group-hover:bg-pink-100 dark:group-hover:bg-pink-950/40 transition-all">
                            <Database className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Data Science</h3>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                Extracting business insights from complex datasets, building predictive models, and deploying ML pipelines for data-driven
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}