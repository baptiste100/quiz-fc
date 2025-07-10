import React from "react";
import {getQuizWithTitleOnly} from "@/lib/quiz/quiz.service";
import {notFound} from "next/navigation";

export default async function QuizLayout({ params, children } : { params: Promise<{ quizId: string }>, children: React.ReactNode}) {
    const { quizId } = await params;
    const quiz = await getQuizWithTitleOnly(Number(quizId));
    if (!quiz) { notFound() }

    return (
        <div className="flex flex-col items-center gap-5 px-10 py-5 mt-10">
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-4xl font-bold">{quiz.name} </h1>
                <em className="text-lg">{quiz.difficulty}</em>
            </div>
            {children}
        </div>
    )
}