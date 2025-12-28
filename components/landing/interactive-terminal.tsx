"use client";

import { motion } from "framer-motion";
import { Copy, Terminal, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TYPING_SPEED = 30;
const COMMANDS = [
    "npx scaffold-ui@latest init",
    "Analyzing requirements...",
    "Generating component tree...",
    "Installing dependencies: shadcn/ui, lucide-react, framer-motion...",
    "Success! Your codebase is ready.",
];

export const InteractiveTerminal = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (currentLine >= COMMANDS.length) return;

        const targetText = COMMANDS[currentLine];
        if (text === targetText) {
            const timeout = setTimeout(() => {
                setCurrentLine((prev) => prev + 1);
                setText("");
            }, 800);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setText(targetText.slice(0, text.length + 1));
        }, TYPING_SPEED);

        return () => clearTimeout(timeout);
    }, [text, currentLine]);

    const onCopy = () => {
        navigator.clipboard.writeText("npx scaffold-ui@latest init");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-xl border border-border/50 bg-black/80 shadow-2xl backdrop-blur-xl"
        >
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onCopy}
                        className="rounded-md p-1.5 hover:bg-white/10 transition-colors"
                    >
                        {isCopied ? (
                            <Check className="h-4 w-4 text-green-400" />
                        ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed">
                {COMMANDS.slice(0, currentLine).map((cmd, i) => (
                    <div key={i} className="mb-2 text-muted-foreground">
                        <span className="mr-2 text-green-400">$</span>
                        {cmd}
                    </div>
                ))}
                {currentLine < COMMANDS.length && (
                    <div className="text-foreground">
                        <span className="mr-2 text-green-400">$</span>
                        {text}
                        <span className="animate-pulse bg-green-400/80 inline-block h-4 w-2 align-middle ml-1" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};
