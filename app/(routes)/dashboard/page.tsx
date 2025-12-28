import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import Header from "../project/[id]/_common/header";

export default async function DashboardPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/");
    }

    const projects = await prisma.project.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            _count: {
                select: { frames: true },
            },
        },
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">My Projects</h1>
                    <Link href="/project/new">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            New Project
                        </Button>
                    </Link>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-20 border rounded-lg border-dashed">
                        <h2 className="text-xl font-semibold mb-2">No projects yet</h2>
                        <p className="text-muted-foreground mb-4">Start by creating your first project.</p>
                        <Link href="/project/new"><Button>Create Project</Button></Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/project/${project.id}`}>
                                <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="truncate">{project.name || "Untitled Project"}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
                                            {/* Placeholder for thumbnail */}
                                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                                                UI
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between text-xs text-muted-foreground">
                                        <span>{project._count.frames} screens</span>
                                        <span>{formatDistanceToNow(project.createdAt)} ago</span>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
