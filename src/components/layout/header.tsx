import Link from "next/link";
import {getUser} from "@/lib/auth/auth-server";
import Image from "next/image";
import SignoutButton from "@/components/features/SignoutButton";
import {User} from "better-auth";
export const Header = async () => {
    const user: User | undefined = await getUser();

    return (
        <header className="flex items-center gap-6 m-5 px-8 py-4 bg-gradient-to-tr from-[color:var(--first-color-light)] to-[color:var(--first-color-dark)] text-[color:var(--light-text-color)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Link className="font-bold hover:scale-105 transition-transform duration-200" href="/" >
                <Image
                    src="/images/quiz-fc-logo-allonge-colore.png"
                    alt="Logo Quiz FC"
                    width={180}
                    height={180}
                    className="drop-shadow-md"
                />
            </Link>

            <div className="flex-1"></div>

            <nav className="flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <SignoutButton/>
                        <Link
                            href="/account/informations"
                            className="flex items-center gap-3 text-lg font-medium hover:bg-white/20 rounded-lg px-3 py-2 transition-all duration-200"
                        >
                            <span>{user.name}</span>
                            {user.image && (
                                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/30 hover:ring-white/60 transition-all duration-200">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={user.image}
                                        alt="user image"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            )}
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            className="text-lg px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105 font-medium"
                            href="/auth/signin"
                        >
                            Connexion
                        </Link>
                        <Link
                            className="text-lg px-4 py-2 rounded-lg bg-[color:var(--second-color)] hover:bg-[color:var(--second-color-light)] transition-all duration-200 hover:scale-105 font-medium shadow-md"
                            href="/auth/signup"
                        >
                            Créer un compte
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}