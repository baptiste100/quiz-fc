import {getUser} from "@/lib/auth/auth-server";
import {redirect} from "next/navigation";
import AccountInformations from "@/components/features/EditAccountForm";
import {User} from "better-auth";

export default async function Account() {
    const user: User | undefined = await getUser();

    if (!user) {
        redirect("/");
    }

    return (
        <div className="flex flex-col items-center p-5 gap-5 text-white bg-gradient-to-br from-stone-800 to-stone-950 border-transparent w-100 rounded-xl">
            <p className="text-2xl"> Mon compte </p>
            <AccountInformations user={user} />
        </div>
    )
}