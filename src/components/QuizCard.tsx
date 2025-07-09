import {Quiz} from "@/types/quiz";
import Link from "next/link";
import {notFound} from "next/navigation";

export default function QuizCard( props: { quiz: Quiz } ) {
    const quiz = props.quiz;

    if (!quiz) {
        notFound();
    }

    return (
        <div className="flex flex-col justify-between w-80 bg-gradient-to-br bg-stone-800 to-stone-950 text-white rounded-lg p-10 gap-5 shadow-lg hover:shadow-2xl transition-shadow">
            <h1 className="text-2xl font-bold text-center">{quiz.name}</h1>
            <em className="text-center text-lg">Difficulté : {quiz.difficulty}</em>
            <Link
                href={`/quizs/${quiz.id}`}
                className="p-3 mt-5 bg-green-800 border border-transparent hover:bg-green-700 rounded-lg text-center  hover:border-white transition-all"
            >
                Démarrer le quiz
            </Link>
        </div>
    );
}