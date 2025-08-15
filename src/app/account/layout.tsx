import React from "react";
import AccountSidebar from "@/components/layout/AccountSidebar";

export default async function AccountLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl rounded-xl mx-auto overflow-hidden border-1">
                <div className="bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--first-color-light)] p-6">
                    <h1 className="text-3xl font-bold text-white text-center">Mon compte</h1>
                </div>
                <div className="space-y-6 flex flex-row">
                    <div>
                        <AccountSidebar/>
                    </div>
                    <div className="w-150">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}