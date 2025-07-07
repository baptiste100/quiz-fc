import QuizList from "@/components/QuizList";
import Link from "next/link";

export default async function Home() {
    return (
        <div className="flex flex-col gap-5 px-10">
            <div className="flex flex-col items-center">
                <h1 className="py-15 text-4xl font-bold text-center">QUIZ FC</h1>
                <Link href="/quizs" className="py-5 px-10 text-2xl bg-neutral-900 rounded-xl border border-transparent hover:border-white">Tous les quizs</Link>
            </div>
            <QuizList/>
        </div>
    );
}
