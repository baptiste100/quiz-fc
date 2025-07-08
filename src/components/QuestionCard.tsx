"use client"

import {useState} from "react";
import {QuestionWithShuffledAnswers} from "@/types/question";
import {redirect} from "next/navigation";

export default function QuestionCard(props: { questions: QuestionWithShuffledAnswers[] }) {
    const [currentQuestionNb, setCurrentQuestionNb] = useState<number>(0);
    const [nbCorrectAnswers, setNbCorrectAnswers] = useState<number>(0);
    const questions = props.questions;

    const handlePlayerResponds = (isCorrect: boolean) => {
        if (isCorrect) {
            setNbCorrectAnswers(nbCorrectAnswers + 1);
        }
        if (currentQuestionNb + 1 < questions.length) {
            setCurrentQuestionNb(currentQuestionNb + 1);
        } else {
            redirect("..");
        }
    }

    return (
        <div className="flex flex-col bg-neutral-900 rounded-xl p-10 gap-10">
            <h1 className="text-xl">{questions[currentQuestionNb].question}</h1>
            <div className="flex flex-col gap-3">
                { questions[currentQuestionNb].answers.map((answer, index) => (
                    <button key={index} onClick={() => { handlePlayerResponds(answer.isCorrect) }} className="text-lg p-3 rounded-xl bg-black cursor-pointer border border-transparent hover:border-white"> { answer.text } </button>
                ))}
            </div>
        </div>
    )
}