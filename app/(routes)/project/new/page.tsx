"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/landing/navbar";

export default function NewProjectPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [prompt, setPrompt] = useState(searchParams.get("prompt") || "");
    const [isLoading, setIsLoading] = useState(false);

    const handleCreate = async () => {
        if (!prompt.trim()) return;

        try {
            setIsLoading(true);
            const response = await fetch("/api/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Project created! Generating screens...");
                router.push(`/project/${data.data.id}`);
            } else {
                toast.error("Failed to create project");
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            What do you want to build?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Describe your dream app, and we'll scaffold it for you.
                        </p>
                    </div>

                    <div className="space-y-4 p-1">
                        <div className="relative rounded-xl border bg-card p-2 shadow-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                            <Textarea
                                placeholder="e.g., A meditation timer app with a dark minimalist theme and progress tracking..."
                                className="min-h-[150px] resize-none border-0 bg-transparent text-lg focus-visible:ring-0 shadow-none p-4"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                disabled={isLoading}
                                autoFocus
                            />
                            <div className="flex justify-between items-center px-4 pb-2">
                                <span className="text-xs text-muted-foreground">
                                    AI-Powered Generation
                                </span>
                                <Button
                                    size="lg"
                                    onClick={handleCreate}
                                    disabled={!prompt.trim() || isLoading}
                                    className="rounded-lg gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="h-4 w-4" />
                                            Scaffold Project
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>

                        <div className="flex gap-2 justify-center flex-wrap">
                            {[
                                "Social Media Dashboard",
                                "Crypto Portfolio Tracker",
                                "E-commerce Product Page"
                            ].map((suggestion) => (
                                <Button
                                    key={suggestion}
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full text-xs text-muted-foreground hover:text-foreground"
                                    onClick={() => setPrompt(suggestion)}
                                >
                                    {suggestion}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
