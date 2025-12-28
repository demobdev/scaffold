import JSZip from "jszip";
import { readFile } from "fs/promises";
import { join } from "path";

// List of available Shadcn components in components/ui
// In a real app, we would scan this directory, but for now we list common ones.
const AVAILABLE_COMPONENTS = [
    "button", "card", "input", "label", "avatar", "dialog", "separator", "badge",
    "dropdown-menu", "accordion", "sheet", "skeleton", "textarea", "switch", "slider",
    "scroll-area", "tabs", "popover", "tooltip", "alert", "alert-dialog", "aspect-ratio", "calendar", "checkbox"
];

interface ExportOptions {
    frame: {
        htmlContent: string;
        // We assume the frame also might contain a JSON representation in the future
    };
    projectValues?: {
        theme?: string;
    };
}

export async function generateNextJsZip(options: ExportOptions) {
    const zip = new JSZip();
    const templatePath = join(process.cwd(), "lib/templates/nextjs-app-router");

    // 1. Add Template Files
    const filesToCopy = [
        "package.json",
        "tsconfig.json",
        "tailwind.config.ts",
        "components.json",
        "app/layout.tsx",
        "app/globals.css",
        "lib/utils.ts"
    ];

    for (const file of filesToCopy) {
        try {
            const content = await readFile(join(templatePath, file), "utf-8");
            zip.file(file, content);
        } catch (e) {
            console.warn(`Missing template file: ${file}`);
        }
    }

    // 2. Add App Components (from options.frame.htmlContent)
    // Logic: We need to parse the HTML/JSX and extract the code.
    // For now, let's assume `options.frame.htmlContent` IS the full Page JSX code if it starts with 'import',
    // or we wrap it if it's just HTML.

    let pageContent = options.frame.htmlContent;

    // Basic heuristic: if it doesn't look like a React file, wrap it.
    if (!pageContent.includes("export default function")) {
        pageContent = `
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// Add other imports as needed based on scanning

export default function Page() {
  return (
    <>
      ${pageContent}
    </>
  );
}
`;
    }

    zip.file("app/page.tsx", pageContent);

    // 3. Scan for components and add them
    // This is a naive scan. In production we'd use a proper parser or regex.
    for (const component of AVAILABLE_COMPONENTS) {
        // If the page content mentions the component (e.g. "Dialog", "Button")
        // We map "button" -> "Button", "dropdown-menu" -> "DropdownMenu" (complex)
        // Simpler: Check if "from \"@/components/ui/button\"" is present.
        if (pageContent.includes(`@/components/ui/${component}`)) {
            try {
                const componentContent = await readFile(
                    join(process.cwd(), "components/ui", `${component}.tsx`),
                    "utf-8"
                );
                zip.file(`components/ui/${component}.tsx`, componentContent);
            } catch (e) {
                console.warn(`Could not include component: ${component}`);
            }
        }
    }

    return zip.generateAsync({ type: "nodebuffer" });
}
