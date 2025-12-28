"use client";

import { motion } from "framer-motion";
import {
    Database,
    Zap,
    Layers,
    Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Production Ready Export",
        description: "Don't just get HTML. Get a full Next.js or Vite codebase with shadcn/ui configured.",
        icon: Download,
        className: "md:col-span-2 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent border-blue-500/20",
    },
    {
        title: "Stripe Billing",
        description: "Monetize your SaaS instantly with built-in subscription management.",
        icon: Database,
        className: "md:col-span-1 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20",
    },
    {
        title: "AI Component Hydration",
        description: "We use your existing components. No more random CSS classes.",
        icon: Layers,
        className: "md:col-span-1 bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20",
    },
    {
        title: "Edge Runtime",
        description: "Powered by Vercel Edge functions for low-latency generation.",
        icon: Zap,
        className: "md:col-span-2 bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-transparent border-pink-500/20",
    },
];

export const FeatureGrid = () => {
    return (
        <section id="features" className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Everything you need to ship.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        ScaffoldUI isn't just a code generator. It's a full-stack engineering partner.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border bg-card/50 p-8 transition-all duration-300 hover:shadow-2xl",
                            feature.className
                        )}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Glow Effect */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[100px] transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-110" />

                        <div className="relative z-10 flex flex-col gap-4 h-full justify-between">
                            <div>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/50 text-foreground ring-1 ring-white/10 backdrop-blur-sm">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
