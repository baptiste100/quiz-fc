import Link from "next/link";
import {getUser} from "@/lib/auth/auth-server";
import Image from "next/image";
import SignoutButton from "@/components/features/SignoutButton";

export const Header = async () => {
    const user = await getUser();

    return (
        <header className="flex items-center text-4xl gap-4 w-full px-10 py-5 bg-gradient-to-br bg-stone-800 to-stone-950">
            <Link href="/" >QuizFC</Link>
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
                            <Link className="text-lg p-2 rounded-lg hover:bg-stone-700" href="/auth/signin" >Connexion</Link>
                            <Link className="text-lg p-2 rounded-lg hover:bg-stone-700" href="/auth/signup" >Créer un compte</Link>
                        </>
                    )
                }
            </div>
        </header>
    )
}