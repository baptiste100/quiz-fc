import QuizList from "@/components/features/QuizList";
import Link from "next/link";
import {getUser} from "@/lib/auth/auth-server";
import {User} from "better-auth";
import { ArrowRight } from "lucide-react";

export default async function Home() {
    const user: User | undefined = await getUser();

    return (
        <div className="flex flex-col items-center gap-10 px-10">
            <div className="flex flex-col items-center gap-10">
                <h1 className="py-10 text-6xl text-center font-bold text-green-600">QUIZ FC</h1>
                { !user &&
                    <div className="flex gap-10 text-center">
                        <Link className="w-60 py-2 px-5 text-2xl border-3 border-[color:var(--button-bg)] hover:bg-[color:var(--button-bg)] hover:text-[color:var(--light-text-color)] text-[color:var(--first-color-light)] rounded-lg" href="/auth/signin" >Connexion</Link>
                        <Link className="w-60 py-2 px-5 text-2xl border-3 border-[color:var(--button-bg)] hover:bg-[color:var(--button-bg)] hover:text-[color:var(--light-text-color)] text-[color:var(--first-color-light)] rounded-lg" href="/auth/signup" >Créer un compte</Link>
                    </div>
                }
            </div>
            <QuizList/>
            <Link href="/quizs" className="flex flex-row gap-4 items-center py-2 px-5 text-2xl border-3 border-[color:var(--button-bg-2)] hover:bg-[color:var(--button-bg-2)] hover:text-[color:var(--light-text-color)] text-[color:var(--second-color)] rounded-lg">
                <ArrowRight/>
                <p>Tous les quiz</p>
            </Link>
        </div>
    );
}
