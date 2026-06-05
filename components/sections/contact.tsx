"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            if (res.ok) {
                setStatus("success");
                setFormState({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const data = await res.json();
                console.error("Send failed:", data.error);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (err) {
            console.error("Network error:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const contactDetails = [
        {
            icon: Mail,
            title: "Email",
            value: "somasekharkurapati6423@gmail.com",
            href: "mailto:somasekharkurapati6423@gmail.com",
            label: "Send an email"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "Soma Sekhar Kurapati",
            href: "www.linkedin.com/in/kurapati-soma-venkata-sekhar-9b9a0a334",
            label: "Connect on LinkedIn"
        },
        {
            icon: Github,
            title: "GitHub",
            value: "Sekhar2186",
            href: "https://github.com/Sekhar2186",
            label: "View profile"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Hyderabad, India",
            href: "#",
            label: "Current Residence"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
                    Contact Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-white">
                    Let's Connect
                </h2>
                <p className="mt-5 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                    Have a project in mind, looking for a collaborator, or just want to chat? Reach out directly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Side: Contact details */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="rounded-3xl border p-5 sm:p-8 bg-white dark:bg-neutral-950/80 border-neutral-100 dark:border-neutral-900 shadow-sm dark:shadow-none">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                            Contact Information
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                            Feel free to contact me via the form or through my social media channels. I will do my best to get back to you within 24 hours.
                        </p>

                        <div className="flex flex-col gap-6">
                            {contactDetails.map((detail, index) => {
                                const Icon = detail.icon;
                                return (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-neutral-900 text-purple-500 flex items-center justify-center border border-purple-100 dark:border-neutral-800">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                                                {detail.title}
                                            </span>
                                            {detail.href !== "#" ? (
                                                <a
                                                    href={detail.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors break-all"
                                                >
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 break-all">
                                                    {detail.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:col-span-7">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border p-8 bg-white dark:bg-neutral-950/80 border-neutral-100 dark:border-neutral-900 shadow-sm dark:shadow-none flex flex-col gap-6"
                    >
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                            Send a Message
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                            All fields are required.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                                    placeholder="Enter Your Name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                                placeholder="Project Collaboration"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl border bg-transparent text-sm text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        {status === "success" && (
                            <div className="flex items-center gap-3 p-4 rounded-xl border bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400 text-sm">
                                <CheckCircle2 className="h-5 w-5 shrink-0" />
                                <span>Message sent! I&apos;ll get back to you within 24 hours.</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-3 p-4 rounded-xl border bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/60 text-red-600 dark:text-red-400 text-sm">
                                <span className="text-lg">⚠️</span>
                                <span>Something went wrong. Please try again or email me directly.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white bg-purple-500 hover:bg-purple-600 disabled:bg-purple-400 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-purple-500/10"
                        >
                            {status === "sending" ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Sending...
                                </>
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle2 className="h-5 w-5" />
                                    Sent!
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

