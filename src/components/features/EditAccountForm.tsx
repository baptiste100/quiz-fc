"use client"

import Image from "next/image";
import {User} from "better-auth";
import {authClient} from "@/lib/auth/auth-client";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {EditableText} from "@/components/ui/editableText";

export default function AccountInformations(props : { user: User }) {
    const user = props.user;
    const name: string = user.name;
    const email: string = user.email;
    const router = useRouter();

    async function updateName(newName: string) {
        await authClient.updateUser({
            name: newName,
        },
            {
                onSuccess: () => {
                    router.push("/account");
                    router.refresh();
                },
                onError: (error) => {
                    toast.error(error.error.message);
                }
            }
        );
    }

    async function updateEmail(newEmail: string) {
        try {
            if (newEmail != email) {
                await authClient.changeEmail({
                    newEmail: newEmail,
                    callbackURL: "/",
                },
                    {
                        onSuccess: () => {
                            router.push("/account");
                            router.refresh();
                        },
                        onError: (error) => {
                            toast.error(error.error.message);
                        }
                    }
                );
            }
        }
        catch {
            toast.error("Erreur lors du changement d'email");
        }
    }

    return (
        <div className='flex flex-col gap-8 w-full max-w-md mx-auto'>
            {/* Section profil avec image et nom */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gray-600">
                    {user?.image ? (
                        <Image className="w-full h-full object-cover" src={user.image} alt="user image" width={80} height={80}/>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">Pas d'image</div>
                    )}
                </div>
                <div className="text-xl font-medium">
                    <EditableText value={name} onUpdate={async (name) => { await updateName(name) }}/>
                </div>
            </div>

            {/* Section informations */}
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Email :</label>
                    <EditableText value={email} onUpdate={async (mail) => { await updateEmail(mail) }}/>
                </div>
            </div>
        </div>
    )
}