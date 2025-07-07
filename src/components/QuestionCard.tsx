"use client"

import {Quiz} from "@/types/quiz";
import {useState} from "react";
import Question from "@/types/question";

export default function QuestionCard(props: { quiz: Quiz }) {
    const quiz = props.quiz;
    const [question, setQuestion] = useState<Question>();

    return (
        <div className="flex flex-col bg-neutral-900 rounded-xl p-10 gap-2">
            <p>{quiz.name}</p>
            {
                quiz.questions?.map((q) => (
                    <p key={q.id}> {q.question} </p>
                ))
            }
        </div>
    )
}