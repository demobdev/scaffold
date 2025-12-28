"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InteractiveTerminal } from "./interactive-terminal";

export const HeroSection = () => {
    return (
        <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-20 md:py-32">
            {/* Background Video/Grid */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-flow" />
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-1 flex-col items-center lg:items-start gap-6"
                >
                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-md">
                        <Sparkles className="mr-2 h-3.5 w-3.5" />
                        <span>AI-Powered Frontend Engineering</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                        Design at the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                            Speed of Thought
                        </span>
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                        ScaffoldUI transforms your ideas into production-ready React code.
                        Export to Next.js or Vite with zero lock-in.
                        Built for developers who value quality and speed.
                    </p>
                    <div className="w-full max-w-lg mt-8">
                        <div className="relative flex items-center w-full p-2 bg-card/50 backdrop-blur-sm border rounded-full shadow-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                            <input
                                type="text"
                                placeholder="Describe your dream app..."
                                className="flex-1 bg-transparent border-0 px-4 py-3 text-base focus:outline-none focus:ring-0 placeholder:text-muted-foreground/70"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        const prompt = e.currentTarget.value;
                                        // Simple redirect to the new page with prompt pre-filled via query param would be ideal, 
                                        // but for now let's just go to the new page or handle it.
                                        // Actually, the user wants to "click start". 
                                        // Let's make this input functional.
                                        if (prompt.trim()) {
                                            window.location.href = `/project/new?prompt=${encodeURIComponent(prompt)}`;
                                        }
                                    }
                                }}
                            />
                            <Button
                                className="rounded-full px-6 ml-2"
                                onClick={(e) => {
                                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                    if (input.value.trim()) {
                                        window.location.href = `/project/new?prompt=${encodeURIComponent(input.value)}`;
                                    }
                                }}
                            >
                                Generate
                                <Sparkles className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                            <Link href="/dashboard" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
                                Go to Dashboard
                            </Link>
                            <span>•</span>
                            <Link href="#features" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
                                How it works
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full max-w-xl flex justify-center lg:justify-end"
                >
                    <InteractiveTerminal />
                </motion.div>
            </div>
        </section>
    );
};
