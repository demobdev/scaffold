import { BillingForm } from "@/components/billing-form";
import Header from "../_common/header";

export default function SettingsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-8">Settings</h1>
                <BillingForm />
            </div>
        </div>
    );
}
