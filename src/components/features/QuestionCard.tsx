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
                redirect(pathname + `/${quizResultId}`);
            }
        }, 1000)
    }

    return (
        <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-xl flex items-center justify-center p-10">
            <div className="w-full max-w-2xl">
                {/* Progress bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            Question {currentQuestionNb + 1} sur {questions.length}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            {Math.round(((currentQuestionNb) / questions.length) * 100)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--second-color)] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentQuestionNb / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--first-color-light)] p-6">
                        <h1 className="text-xl md:text-2xl font-semibold text-white text-center">
                            {questions[currentQuestionNb].question}
                        </h1>
                    </div>

                    {/* Answers */}
                    <div className="p-6 space-y-3">
                        {questions[currentQuestionNb].answers.map((answer, index) => {
                            let buttonStyle = "border-gray-200 hover:border-[color:var(--second-color)] hover:bg-orange-50";

                            if (hasResponded) {
                                if (answer.isCorrect) {
                                    buttonStyle = "border-green-500 bg-green-50 text-green-700";
                                } else if (index === responseIndex) {
                                    buttonStyle = "border-red-500 bg-red-50 text-red-700";
                                } else {
                                    buttonStyle = "border-gray-200 bg-gray-50 text-gray-500";
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handlePlayerResponds(answer.isCorrect, index)}
                                    disabled={hasResponded}
                                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${buttonStyle} ${!hasResponded ? 'cursor-pointer' : 'cursor-default'}`}
                                >
                                    <span className="flex items-center">
                                        <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 text-sm font-bold ${hasResponded && answer.isCorrect ? 'border-green-500 bg-green-500 text-white' : hasResponded && index === responseIndex ? 'border-red-500 bg-red-500 text-white' : 'border-gray-300'}`}>
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        {answer.text}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}