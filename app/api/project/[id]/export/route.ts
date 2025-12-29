import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateNextJsZip, getPageContent } from "@/lib/export/zipper";
import { THEME_LIST } from "@/lib/themes";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get("type") || "nextjs";
    const mode = searchParams.get("mode") || "project"; // 'project' or 'single'
    const frameIdRequested = searchParams.get("frameId");

    if (!id) {
        return new NextResponse("Project ID required", { status: 400 });
    }

    try {
        // 1. Fetch Project and Frames
        const project = await prisma.project.findUnique({
            where: { id },
            include: {
                frames: {
                    orderBy: { createdAt: "asc" },
                },
            },
        });

        if (!project || project.frames.length === 0) {
            return new NextResponse("Project or Frames not found", { status: 404 });
        }

        // 2. Handle Single Page Export (Drag & Drop)
        if (mode === "single") {
            const frame = frameIdRequested
                ? project.frames.find(f => f.id === frameIdRequested)
                : project.frames[project.frames.length - 1]; // Default to latest

            if (!frame) return new NextResponse("Frame not found", { status: 404 });

            const pageCode = getPageContent(frame.htmlContent);
            const fileName = `${frame.title.toLowerCase().replace(/\s+/g, "-")}.tsx`;

            return new NextResponse(pageCode, {
                status: 200,
                headers: {
                    "Content-Type": "text/typescript",
                    "Content-Disposition": `attachment; filename="${fileName}"`,
                },
            });
        }

        // 3. Handle Project-wide Export
        if (type === "vite") {
            return new NextResponse("Vite export not implemented yet", { status: 501 });
        }

        // Find theme style string
        const themeStyle = THEME_LIST.find(t => t.id === project.theme)?.style || "";

        const zipBuffer = await generateNextJsZip({
            frames: project.frames.map(f => ({
                id: f.id,
                title: f.title,
                htmlContent: f.htmlContent
            })),
            projectValues: {
                theme: themeStyle
            }
        });

        // 4. Return Zip
        return new NextResponse(zipBuffer as any, {
            status: 200,
            headers: {
                "Content-Type": "application/zip",
                "Content-Disposition": `attachment; filename="${project.name || "project"}-export.zip"`,
            },
        });

    } catch (error) {
        console.error("Export Error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
