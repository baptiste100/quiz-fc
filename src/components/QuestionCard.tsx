"use client"

import {useState} from "react";
import {QuestionWithShuffledAnswers} from "@/types/question";
import {redirect, usePathname} from "next/navigation";

export default function QuestionCard(props: { questions: QuestionWithShuffledAnswers[] }) {
    const [currentQuestionNb, setCurrentQuestionNb] = useState<number>(0);
    const [nbCorrectAnswers, setNbCorrectAnswers] = useState<number>(0);
    const [hasResponded, setHasResponded] = useState<boolean>(false);
    const [responseIndex, setResponseIndex] = useState<number>();

    const questions = props.questions;
    const pathname = usePathname();

    const handlePlayerResponds = (isCorrect: boolean, index: number) => {
        const updateNbCorrectAnswers = nbCorrectAnswers + (isCorrect ? 1 : 0)
        setHasResponded(true);
        setResponseIndex(index);
        setTimeout(() => {
            if (currentQuestionNb + 1 < questions.length) {
                setNbCorrectAnswers(updateNbCorrectAnswers);
                setCurrentQuestionNb(currentQuestionNb + 1);
                setHasResponded(false);
            } else {
                redirect(pathname + `/result?score=${updateNbCorrectAnswers}&total=${questions.length}`);
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