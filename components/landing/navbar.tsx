"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { useKindeBrowserClient, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export const Navbar = () => {
    const { user } = useKindeBrowserClient();

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-14 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Logo />
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
                        <Link href={user ? "/settings" : "/#pricing"} className="hover:text-primary transition-colors">Pricing</Link>
                        {user && <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link href="/dashboard">
                                <Button variant="ghost" size="sm">Dashboard</Button>
                            </Link>
                            <LogoutLink>
                                <Button size="sm" variant="outline">Sign Out</Button>
                            </LogoutLink>
                        </div>
                    ) : (
                        <>
                            <Link href="/api/auth/login">
                                <Button variant="ghost" size="sm">Sign In</Button>
                            </Link>
                            <Link href="/api/auth/register">
                                <Button size="sm">Get Started</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
