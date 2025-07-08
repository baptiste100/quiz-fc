import React from "react";
import {getQuizWithTitleOnly} from "@/lib/quiz/quiz.service";
import {notFound} from "next/navigation";

export default async function QuizLayout({ params, children } : { params: { quizId: string }, children: React.ReactNode}) {
    const quiz = await getQuizWithTitleOnly(Number(params.quizId));
    if (!quiz) { notFound() }

    return (
        <div className="flex flex-col items-center gap-5 px-10 py-5 mt-20">
            <h1 className="text-3xl font-bold">{quiz.name}</h1>
            {children}
        </div>
    )
}