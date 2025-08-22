import QuizList from "@/components/features/QuizList";
import Link from "next/link";
import {getUser} from "@/lib/auth/auth-server";
import {User} from "better-auth";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function Home() {
    const user: User | undefined = await getUser();

    return (
        <div className="flex flex-col items-center gap-10 px-10">
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-6xl text-center">
                    <Image src="/images/quiz-fc-logo-allonge-colore.png" alt="Logo Quiz FC" width={400} height={400}/>
                </h1>
                { !user &&
                    <div className="flex gap-10 text-center">
                        <Link className="w-60 text-center gap-4 items-center py-2 px-4 text-2xl bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--first-color-light)] hover:from-[color:var(--first-color-light)] hover:to-[color:var(--first-color)] text-[color:var(--light-text-color)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" href="/auth/signin" >Connexion</Link>
                        <Link className="w-60 text-center gap-4 items-center py-2 px-4 text-2xl bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--first-color-light)] hover:from-[color:var(--first-color-light)] hover:to-[color:var(--first-color)] text-[color:var(--light-text-color)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" href="/auth/signup" >Créer un compte</Link>
                    </div>
                }
            </div>
            <QuizList/>
            <Link href="/quizs" className="group flex flex-row gap-4 items-center py-2 px-4 text-2xl bg-gradient-to-r from-[color:var(--second-color)] to-[color:var(--second-color-light)] hover:from-[color:var(--second-color-light)] hover:to-[color:var(--second-color)] text-[color:var(--light-text-color)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <ArrowRight className="transition-transform duration-300"/>
                <p>Tous les quiz</p>
            </Link>
        </div>
    );
}
