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
    frames: {
        id: string;
        title: string;
        htmlContent: string;
    }[];
    projectValues?: {
        theme?: string;
    };
}

export function getPageContent(htmlContent: string) {
    let pageContent = htmlContent;

    // Basic heuristic: if it doesn't look like a React file, wrap it.
    if (!pageContent.includes("export default function")) {
        pageContent = `
import React from 'react';

export default function Page() {
  return (
    <>
      ${htmlContent}
    </>
  );
}
`;
    }
    return pageContent;
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
        "lib/utils.ts",
        "README.md"
    ];

    for (const file of filesToCopy) {
        try {
            let content = await readFile(join(templatePath, file), "utf-8");

            // Inject dynamic theme into globals.css
            if (file === "app/globals.css" && options.projectValues?.theme) {
                const themeVars = options.projectValues.theme;
                content = content.replace(
                    /@layer base \{[\s\S]*?\:root \{[\s\S]*?\}/,
                    `@layer base {\n  :root {\n${themeVars}\n  }`
                );
            }

            zip.file(file, content);
        } catch (e) {
            console.warn(`Missing template file: ${file}`);
        }
    }

    // 2. Add App Components for each frame
    for (const frame of options.frames) {
        const slug = frame.title.toLowerCase().replace(/\s+/g, "-");
        const pageCode = getPageContent(frame.htmlContent);

        // Root page is the first frame, others are in routes
        if (options.frames.indexOf(frame) === 0) {
            zip.file("app/page.tsx", pageCode);
        } else {
            zip.file(`app/${slug}/page.tsx`, pageCode);
        }

        // 3. Scan for components and add them (Simplified scan)
        for (const component of AVAILABLE_COMPONENTS) {
            if (pageCode.includes(`@/components/ui/${component}`)) {
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
    }

    return zip.generateAsync({ type: "nodebuffer" });
}
