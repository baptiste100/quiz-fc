"use client"

import {useState} from "react";
import {QuestionWithShuffledAnswers} from "@/types/question";

export default function QuestionCard(props: { questions: QuestionWithShuffledAnswers[] }) {
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const questions = props.questions;

    return (
        <div className="flex flex-col bg-neutral-900 rounded-xl p-10 gap-10">
            <h1 className="text-xl">{questions[questionNumber].question}</h1>
            <div className="flex flex-col gap-3">
                { questions[questionNumber].answers.map((answer, index) => (
                    <button key={index} className="text-lg p-3 rounded-xl bg-black cursor-pointer border border-transparent hover:border-white"> { answer.text } </button>
                ))}
            </div>
        </div>
    )
}