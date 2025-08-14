import Link from "next/link";
import {getUser} from "@/lib/auth/auth-server";
import Image from "next/image";
import SignoutButton from "@/components/features/SignoutButton";
import {User} from "better-auth";
export const Header = async () => {
    const user: User | undefined = await getUser();

    return (
        <header className="flex items-center text-4xl gap-4 m-5 px-10 py-5 bg-[color:var(--div-header)] text-[color:var(--light-text-color)] rounded-xl">
            <Link className="font-bold" href="/" >QuizFC</Link>
            <div className="flex-1"></div>
            <div className="flex gap-5">
                {
                    user ? (
                        <div className="flex gap-10 items-center">
                            <SignoutButton/>
                            <p>{user.name}</p>
                            {user.image &&
                                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <Link href="/account">
                                        <Image className="w-full h-full object-cover" src={user.image} alt="user image" width={40} height={40}/>
                                    </Link>
                                </div>
                                }
                        </div>
                        ) : (
                        <>
                            <Link className="text-lg p-2 px-5 rounded-xl hover:bg-[color:var(--button-bg-hover)]" href="/auth/signin" >Connexion</Link>
                            <Link className="text-xl p-2 px-5 rounded-xl hover:bg-[color:var(--button-bg-hover)]" href="/auth/signup" >Créer un compte</Link>
                        </>
                    )
                }
            </div>
        </header>
    )
}