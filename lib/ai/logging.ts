import prisma from "@/lib/prisma";

export async function logPrompt(userId: string, prompt: string, response: string) {
    try {
        // Fire and forget - don't await this if performance is critical, 
        // but in serverless it's better to await or use `waitUntil`.
        await prisma.promptLog.create({
            data: {
                userId,
                prompt,
                response,
            },
        });
    } catch (error) {
        console.error("Failed to log prompt", error);
    }
}
