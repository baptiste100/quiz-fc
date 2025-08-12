import QuizList from "@/components/features/QuizList";
import Link from "next/link";
import {getUser} from "@/lib/auth/auth-server";

export default async function Home() {
    const user = await getUser();

    return (
        <div className="flex flex-col items-center gap-10 px-10">
            <div className="flex flex-col items-center gap-10">
                <h1 className="py-10 text-5xl text-center font-bold">QUIZ FC</h1>
                { !user &&
                    <div className="flex gap-10 text-center">
                        <Link className="text-lg p-5 rounded-lg bg-gradient-to-br from-stone-800 to-stone-950 border border-transparent hover:border-white w-50" href="/auth/signin" >Connexion</Link>
                        <Link className="text-lg p-5 rounded-lg bg-gradient-to-br from-stone-800 to-stone-950 border border-transparent hover:border-white w-50" href="/auth/signup" >Créer un compte</Link>
                    </div>
                }
            </div>
            <QuizList/>
            <Link href="/quizs" className="py-5 px-10 text-2xl bg-gradient-to-br from-stone-800 to-stone-950 rounded-lg border border-transparent hover:border-white">Tous les quizs</Link>
        </div>
    );
}
