import {QuestionResultWithQuestion} from "@/types/question-result";
import {useState} from "react";

export default function QuestionResultDetails({ questionResult } : { questionResult: QuestionResultWithQuestion}) {
    const [showAnswers, setShowAnswers] = useState<boolean>(false);

    return (
        <div className="border border-gray-100 p-4 bg-white hover:bg-gray-50 hover:shadow-md transition-shadow">
            <button
                onClick={() => { setShowAnswers(prev => !prev) }}
                className="w-full text-left cursor-pointer p-2 rounded transition-colors"
            >
                <div className="flex justify-between items-start gap-3">
                    <p className="text-gray-800 font-medium leading-relaxed flex-1">
                        {questionResult.question.question}
                    </p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            questionResult.isCorrect
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}>
                            {questionResult.isCorrect ? "✓ Correct" : "✗ Incorrect"}
                        </span>
                        <span className={`transition-transform duration-200 ${showAnswers ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </div>
                </div>
            </button>

            {showAnswers && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Réponses :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <span className="text-xs text-green-600 font-semibold block mb-1">BONNE RÉPONSE</span>
                            <span className="text-green-800">{questionResult.question.answer}</span>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <span className="text-xs text-red-600 font-semibold block mb-1">MAUVAISE RÉPONSE</span>
                            <span className="text-red-800">{questionResult.question.wrong1}</span>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <span className="text-xs text-red-600 font-semibold block mb-1">MAUVAISE RÉPONSE</span>
                            <span className="text-red-800">{questionResult.question.wrong2}</span>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <span className="text-xs text-red-600 font-semibold block mb-1">MAUVAISE RÉPONSE</span>
                            <span className="text-red-800">{questionResult.question.wrong3}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}