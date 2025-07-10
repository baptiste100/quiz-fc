import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex items-center text-4xl gap-4 w-full px-10 py-5">
            <Link href="/" >QuizFC</Link>
            <div className="flex-1"></div>
            <div className="flex gap-5">
                <Link className="text-lg" href="/auth/signin" >Connexion</Link>
                <Link className="text-lg" href="/auth/signup" >Créer un compte</Link>
            </div>
        </header>
    )
}