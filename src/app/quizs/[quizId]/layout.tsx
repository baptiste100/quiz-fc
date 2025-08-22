import React from "react";
import {getQuiz} from "@/lib/quiz/quiz.service";
import {notFound} from "next/navigation";
import {getDifficultyColor} from "@/utils/color";

export default async function QuizLayout({ params, children } : { params: Promise<{ quizId: string }>, children: React.ReactNode}) {
    const { quizId } = await params;
    const quiz = await getQuiz(Number(quizId));
    if (!quiz) { notFound() }

    return (
        <div className="min-h-screen p-6 rounded-xl">
            {/* Card container avec coins arrondis */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Header minimaliste */}
                <div className="px-8 py-6 bg-black">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold text-white">
                                {quiz.name}
                            </h1>
                        </div>
                        <div className="text-right">
                            <span className={`${getDifficultyColor(quiz.difficulty)} px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide`}>
                                {quiz.difficulty}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contenu avec padding interne */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-orange-50">
                    {children}
                </div>
            </div>
        </div>
    )
}