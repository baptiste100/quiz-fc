"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

interface TabsData {
    link: string,
    label: string
}

export default function AccountSidebar() {
    const tabs : TabsData[] = [
        {
            link: "informations",
            label: "Mes informations"
        },
        {
            link: "results",
            label: "Mes résultats"
        },
    ]

    const pathname = usePathname();

    return (
        <nav className="flex flex-col items-center">
            {
                tabs.map((tab, index) => (
                    <Link key={index} className={`w-full p-4 border border-gray ${pathname.includes(`/account/${tab.link}`) ? "bg-gradient-to-r from-green-50 to-orange-50 border-b-3 border-b-[color:var(--second-color)]" : "bg-white" } `} href={`/account/${tab.link}`}> {tab.label} </Link>
                ))
            }
        </nav>
    )
}