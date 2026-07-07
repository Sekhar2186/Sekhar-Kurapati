import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import CircularText from "@/components/CircularText";

export default function Footer() {
    return (
        <footer className="w-full mt-auto border-t bg-white dark:bg-neutral-950 border-neutral-100 dark:border-neutral-900/60 py-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo/Copyright */}
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                        <div className="scale-[0.20]">
                            <CircularText
                                text="AUTOSTACK*BUILDYOUR*DREAM*WEBSITE*WITHUS*"
                                onHover="speedUp"
                                spinDuration={15}
                                className="text-purple-500 dark:text-purple-400"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="font-bold text-sm text-neutral-800 dark:text-neutral-200">
                            Sekhar <span className="text-neutral-400">Kurapati</span>
                        </span>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500">
                            &copy; {new Date().getFullYear()} Sekhar Kurapati. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    <Link href="/" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                        About
                    </Link>
                    <Link href="/skills" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                        Skills
                    </Link>
                    <Link href="/projects" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/somasekharkurapati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-4.5 w-4.5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/somasekhar-kurapati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-4.5 w-4.5" />
                    </a>
                    <a
                        href="mailto:somasekhar.kurapati@example.com"
                        className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="h-4.5 w-4.5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}
