import {getUser} from "@/lib/auth/auth-server";
import {redirect} from "next/navigation";
import AccountInformations from "@/components/features/AccountInformations";
import {User} from "better-auth";
import AccountTabHeader from "@/components/layout/accountTabHeader";

export default async function AccountInformationsPage() {
    const user: User | undefined = await getUser();

    if (!user) {
        redirect("/");
    }

    return (
        <div className="bg-white shadow-lg border border-gray-100 p-6">
            <AccountTabHeader tabTitle="Mes informations"/>
            <AccountInformations user={user}/>
        </div>
    )
}