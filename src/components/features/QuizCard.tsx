import {Quiz} from "@/types/quiz";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getDifficultyColor} from "@/utils/color";

export default function QuizCard( props: { quiz: Quiz, isConnectedUser: boolean }) {
    const quiz = props.quiz;

    if (!quiz) {
        notFound();
    }

    return (
        <div className="w-80 bg-gradient-to-br from-green-50 to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group">
            {/* Header avec badge difficulté */}
            <div className="bg-gradient-to-r from-[color:var(--first-color-light)] to-[color:var(--first-color-dark)] p-4">
                <div className="flex justify-center">
                    <span className={`${getDifficultyColor(quiz.difficulty)} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}>
                        {quiz.difficulty}
                    </span>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="p-6 space-y-6">
                {/* Titre */}
                <h2 className="text-xl font-bold text-[color:var(--dark-text-color)] text-center leading-tight min-h-[3rem] flex items-center justify-center">
                    {quiz.name}
                </h2>

                {/* Bouton d'action */}
                <div className="flex justify-center">
                    <Link
                        href={props.isConnectedUser ? `/quizs/${quiz.id}` : `/auth/signin`}
                        className="bg-[color:var(--second-color)] hover:bg-[color:var(--second-color)] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                    >
                        Commencer
                    </Link>
                </div>
            </div>

            {/* Accent coloré en bas - taille fixe avec opacité */}
            <div className="h-2 bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--second-color)] opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}