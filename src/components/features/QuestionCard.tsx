"use client"

import {useState} from "react";
import {QuestionWithShuffledAnswers} from "@/types/question";
import {redirect, usePathname} from "next/navigation";

export default function QuestionCard({ questions, quizResultId } : {questions: QuestionWithShuffledAnswers[], quizResultId: number }) {
    const [currentQuestionNb, setCurrentQuestionNb] = useState<number>(0);
    const [nbCorrectAnswers, setNbCorrectAnswers] = useState<number>(0);
    const [hasResponded, setHasResponded] = useState<boolean>(false);
    const [responseIndex, setResponseIndex] = useState<number>();

    const pathname = usePathname();

    async function createQuestionResult(isCorrect: boolean) {
        return fetch("/api/question-result", {
            method: "POST",
            body: JSON.stringify({ questionId: questions[currentQuestionNb].id, resultId: quizResultId, isCorrect: isCorrect }),
            headers: {"Content-Type": "application/json"}
        })
    }

    async function updateScore (newScore: number) {
        return fetch("/api/quiz-result", {
            method: "PATCH",
            body: JSON.stringify({ resultId: quizResultId, newScore: newScore}),
        });
    }

    const handlePlayerResponds = (isCorrect: boolean, index: number) => {
        const updatedNbCorrectAnswers = nbCorrectAnswers + (isCorrect ? 1 : 0)
        setHasResponded(true);
        setResponseIndex(index);

        createQuestionResult(isCorrect).then((response) => {
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        });

        setTimeout(() => {
            if (currentQuestionNb + 1 < questions.length) {
                setNbCorrectAnswers(updatedNbCorrectAnswers);
                setCurrentQuestionNb(currentQuestionNb + 1);
                setHasResponded(false);
            } else {
                updateScore(updatedNbCorrectAnswers).then((response) => {
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }
                })
                redirect(pathname + `/result?score=${updatedNbCorrectAnswers}&total=${questions.length}`);
            }
        }, 1000)
    }

    return (
        <div className="flex flex-col w-150 text-center rounded-lg bg-gradient-to-br bg-stone-800 to-stone-950 text-white p-10 gap-8">
            <p className="text-lg">{currentQuestionNb + 1} / {questions.length}</p>
            <h1 className="text-xl">{questions[currentQuestionNb].question}</h1>
            <div className="flex flex-col gap-3">
                { questions[currentQuestionNb].answers.map((answer, index) => (
                    <button key={index} onClick={() => { handlePlayerResponds(answer.isCorrect, index) }}
                        className={`text-lg p-2 rounded-lg text-black bg-gray-200  hover:bg-gray-300  cursor-pointer border-5  ${hasResponded ? answer.isCorrect ? "border-green-500" : index == responseIndex ? "border-red-500" : "border-transparent" : "border-transparent"}` }>
                        { answer.text } </button>
                ))}
            </div>
        </div>
    )
}