"use client"

import {getDifficultyColor, getScoreColor} from "@/utils/color";
import {formatDate, getHoursFromDate} from "@/utils/date";
import {QuizResultWithQuestionsAndQuiz} from "@/types/quiz-result";
import {useState} from "react";
import QuestionResults from "@/components/features/QuestionResults";

export default function QuizResult(props: { result: QuizResultWithQuestionsAndQuiz }) {
    const result = props.result;
    const [showQuestions, setShowQuestions] = useState(false);

    if (!result || !result.quiz || result.score === null) {
        return null;
    }

    return (
        <div className="flex flex-col">
            <button onClick={() => { setShowQuestions(!showQuestions) }} className="p-6 cursor-pointer hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Informations principales */}
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg mb-2">
                            {result.quiz.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(result.quiz.difficulty)}`}>
                                            {result.quiz.difficulty}
                                        </span>
                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--second-color)]"></div>
                                {formatDate(result.date)}
                            </div>
                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--second-color)]"></div>
                                {getHoursFromDate(result.date)}
                            </div>
                        </div>
                    </div>

                    {/* Score */}
                    <div className={`px-4 py-2 rounded-xl font-bold text-lg ${getScoreColor(result.score)}`}>
                        {result.score} / 10
                    </div>
                </div>
            </button>
            { showQuestions &&
                <QuestionResults questionResults={result.questionResults}/>
            }
        </div>
    )
}