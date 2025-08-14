"use client"

import {authClient} from "@/lib/auth/auth-client";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

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
        <button className="text-lg px-5 p-2 rounded-lg hover:bg-[color:var(--button-bg-hover)] cursor-pointer" onClick={() => { signOut(); }} >Déconnexion</button>
    )
}