"use client"

import {useState} from "react";
import {QuestionWithShuffledAnswers} from "@/types/question";
import {redirect, usePathname} from "next/navigation";

export default function QuestionCard(props: { questions: QuestionWithShuffledAnswers[] }) {
    const [currentQuestionNb, setCurrentQuestionNb] = useState<number>(0);
    const [nbCorrectAnswers, setNbCorrectAnswers] = useState<number>(0);
    const questions = props.questions;
    const pathname = usePathname();

    const handlePlayerResponds = (isCorrect: boolean) => {
        const updateNbCorrectAnswers = nbCorrectAnswers + (isCorrect ? 1 : 0)
        if (currentQuestionNb + 1 < questions.length) {
            setNbCorrectAnswers(updateNbCorrectAnswers);
            setCurrentQuestionNb(currentQuestionNb + 1);
        } else {
            redirect(pathname + `/result?score=${updateNbCorrectAnswers}&total=${questions.length}`);
        }
    }

    return (
        <div className="flex flex-col text-center rounded-2xl bg-gradient-to-br bg-stone-800 to-stone-950 text-white p-10 gap-8">
            <p className="text-lg">{currentQuestionNb + 1} / {questions.length}</p>
            <h1 className="text-xl">{questions[currentQuestionNb].question}</h1>
            <div className="flex flex-col gap-3">
                { questions[currentQuestionNb].answers.map((answer, index) => (
                    <button key={index} onClick={() => { handlePlayerResponds(answer.isCorrect) }} className="text-lg p-3 rounded-xl bg-green-800 hover:bg-green-700 cursor-pointer border border-transparent hover:border-white"> { answer.text } </button>
                ))}
            </div>
        </div>
    )
}