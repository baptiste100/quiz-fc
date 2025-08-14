import React from "react";
import {getQuiz} from "@/lib/quiz/quiz.service";
import {notFound} from "next/navigation";

export default async function QuizLayout({ params, children } : { params: Promise<{ quizId: string }>, children: React.ReactNode}) {
    const { quizId } = await params;
    const quiz = await getQuiz(Number(quizId));
    if (!quiz) { notFound() }

    return (
        <div className="flex flex-col items-center gap-3 px-10 mt-5">
            <div className="flex flex-col items-center gap-1 w-full rounded-xl p-2">
                <h1 className="text-4xl font-bold">{quiz.name} </h1>
                <em className="text-lg font-bold">{quiz.difficulty}</em>
            </div>
            {children}
        </div>
    )
}