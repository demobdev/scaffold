import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Assuming prisma is exported from here
import { generateNextJsZip } from "@/lib/export/zipper";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get("type") || "nextjs"; // Default to nextjs

    if (!id) {
        return new NextResponse("Project ID required", { status: 400 });
    }

    try {
        // 1. Fetch Project and Frame
        // We need the *latest* frame content to export
        const project = await prisma.project.findUnique({
            where: { id },
            include: {
                frames: {
                    orderBy: { createdAt: "desc" },
                    take: 1,
                },
            },
        });

        if (!project || project.frames.length === 0) {
            return new NextResponse("Project or Frames not found", { status: 404 });
        }

        const currentFrame = project.frames[0];

        // 2. Generate Zip
        let zipBuffer: Buffer;

        if (type === "vite") {
            // Placeholder for v2
            return new NextResponse("Vite export not implemented yet", { status: 501 });
        } else {
            zipBuffer = await generateNextJsZip({
                frame: {
                    htmlContent: currentFrame.htmlContent
                },
                projectValues: {
                    theme: project.theme || "light"
                }
            });
        }

        // 3. Return Zip
        return new NextResponse(zipBuffer, {
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
