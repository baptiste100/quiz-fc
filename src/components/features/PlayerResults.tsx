"use client"

import {QuizResultWithQuestionsAndQuiz} from "@/types/quiz-result";
import QuizResult from "@/components/features/QuizResult";

export default function PlayerResults(props: { quizResults: QuizResultWithQuestionsAndQuiz[] }) {
    const quizResults: QuizResultWithQuestionsAndQuiz[] = props.quizResults;

    if (quizResults.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                <div className="text-gray-400 text-lg">Aucun quiz effectué pour le moment</div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
                {quizResults.map((result) => {
                    return (
                        <QuizResult key={result.id} result={result}/>
                    )
                })}
            </div>
        </div>
    )
}