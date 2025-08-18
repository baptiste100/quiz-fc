"use client"

import {QuizResultWithQuiz} from "@/types/result";
import {getDifficultyColor, getScoreColor} from "@/utils/color";
import {formatDate, getHoursFromDate} from "@/utils/date";

export default function PlayerResults(props: { quizResults: QuizResultWithQuiz[] }) {
    const quizResults: QuizResultWithQuiz[] = props.quizResults;

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
                    if (!result || !result.quiz || result.score === null) {
                        return null;
                    }

                    return (
                        <div key={result.id} className="p-6 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                {/* Informations principales */}
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                        {result.quiz.name}
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(result.quiz.difficulty)}`}>
                                            {result.quiz.difficulty}
                                        </span>
                                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--second-color)]"></div>
                                            {formatDate(result.date)}
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--second-color)]"></div>
                                            {getHoursFromDate(result.date)}
                                        </div>
                                    </div>
                                </div>

                                {/* Score */}
                                <div className={`px-4 py-2 rounded-xl font-bold text-lg ${getScoreColor(result.score)}`}>
                                    {result.score} / 10
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}