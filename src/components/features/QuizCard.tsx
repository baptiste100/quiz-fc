import {Quiz} from "@/types/quiz";
import Link from "next/link";
import {notFound} from "next/navigation";

export default function QuizCard( props: { quiz: Quiz, isConnectedUser: boolean }) {
    const quiz = props.quiz;

    if (!quiz) {
        notFound();
    }

    return (
        <div className="flex flex-col justify-between w-80 bg-gradient-to-br from-green-50 to-orange-50 rounded-lg p-10 gap-5 shadow-lg hover:shadow-2xl transition-shadow">
            <h1 className="text-2xl font-bold text-center">{quiz.name}</h1>
            <em className="text-center text-lg">Difficulté : {quiz.difficulty}</em>
            <Link
                href={props.isConnectedUser ? `/quizs/${quiz.id}` : `/auth/signin`}
                className="mx-11  mt-5 bg-[color:var(--button-bg-2)] hover:bg-[color:var(--button-bg-2-hover)] text-[color:var(--light-text-color)] border border-transparent rounded-lg text-center transition-all"
            >
                Démarrer le quiz
            </Link>
        </div>
    );
}