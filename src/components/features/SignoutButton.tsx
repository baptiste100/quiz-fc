"use client"

import {authClient} from "@/lib/auth/auth-client";
import {useRouter} from "next/navigation";

export default function SignoutButton() {
    const router = useRouter();

    const signOut = async() => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    router.refresh();
                },
            },
        });
    }

    return (
        <button className="text-lg px-5 p-2 rounded-lg hover:bg-white/20 cursor-pointer" onClick={() => { signOut(); }} >Déconnexion</button>
    )
}