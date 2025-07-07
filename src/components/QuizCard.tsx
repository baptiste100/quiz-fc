import {Quiz} from "@/types/quiz";
import Link from "next/link";
import {notFound} from "next/navigation";

export default function QuizCard( props: { quiz: Quiz } ) {
    const quiz = props.quiz;

    if (!quiz) {
        notFound();
    }

    return (
        <div className="flex flex-col bg-neutral-900 rounded-xl p-10 gap-2">
            <h1 className="text-2xl font-bold"> {quiz.name}</h1>
            <em>Difficulty : {quiz.difficulty}</em>
            <Link href={`/quizs/${quiz.id}`} className="p-2 mt-5 bg-black border border-transparent hover:border-white rounded-xl text-center"> Démarrer le quiz </Link>
        </div>
    )
}