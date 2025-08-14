import {getUser} from "@/lib/auth/auth-server";
import {redirect} from "next/navigation";
import AccountInformations from "@/components/features/AccountInformations";
import {User} from "better-auth";

export default async function AccountInformationsPage() {
    const user: User | undefined = await getUser();

    if (!user) {
        redirect("/");
    }

    return (
        <div className="bg-white shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[color:var(--second-color)]"></div>
                <h2 className="text-xl font-semibold text-gray-800">Mes informations</h2>
            </div>
            <AccountInformations user={user} />
        </div>
    )
}