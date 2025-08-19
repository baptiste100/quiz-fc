"use client"

import {QuestionResultWithQuestion} from "@/types/question-result";
import QuestionResultDetails from "@/components/features/QuestionResultDetails";

export default function QuestionResults({ questionResults }: { questionResults: QuestionResultWithQuestion[] }) {

    return (
        <div>
            {
                questionResults ? questionResults.map((questionResult: QuestionResultWithQuestion) => (
                    <QuestionResultDetails key={questionResult.questionId} questionResult={questionResult}/>
                )) : <p> Aucune donnée </p>
            }
        </div>
    )
}