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
                    router.push("/account/informations");
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
                            router.push("/account/informations");
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
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* Photo de profil */}
                <div className="p-6">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm border-4 border-white/30">
                            {user?.image ? (
                                <Image
                                    className="w-full h-full object-cover"
                                    src={user.image}
                                    alt="photo de profil"
                                    width={96}
                                    height={96}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/70 text-sm font-medium">
                                    Pas d&apos;image
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-6">
                    {/* Section nom */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[color:var(--second-color)]"></div>
                            <label className="text-sm font-semibold text-gray-700">
                                Nom d&apos;utilisateur
                            </label>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-lg p-4 border border-gray-200">
                            <EditableText
                                value={name}
                                onUpdate={async (name) => { await updateName(name) }}
                            />
                        </div>
                    </div>

                    {/* Section email */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[color:var(--second-color)]"></div>
                            <label className="text-sm font-semibold text-gray-700">
                                Adresse email
                            </label>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-lg p-4 border border-gray-200">
                            <EditableText
                                value={email}
                                onUpdate={async (mail) => { await updateEmail(mail) }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}