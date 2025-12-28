"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const BillingForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubscribe = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>
                    You are currently on the <span className="font-bold">Free</span> plan.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="flex items-center justify-between border p-4 rounded-lg">
                        <div>
                            <p className="font-medium">Pro Plan</p>
                            <p className="text-sm text-muted-foreground">$20/month</p>
                        </div>
                        <Button onClick={onSubscribe} disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Upgrade
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Unlock unlimited generations and exports.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
