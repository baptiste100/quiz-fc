import Link from "next/link";
import { getQuizResultWithQuestionResults } from "@/lib/quiz/quizResult.service";
import {notFound} from "next/navigation";
import {QuizResultWithQuestions} from "@/types/quiz-result";
import {QuestionResult} from "@/types/question-result";

export default async function PageResult({ params } : { params: Promise<{ resultId: number }>}) {
    const { resultId } = await params;
    const quizResult: QuizResultWithQuestions | null = await getQuizResultWithQuestionResults(resultId);
    if (!quizResult) notFound();
    const questionResults: QuestionResult[] = quizResult.questionResults;

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-orange-50 p-20 rounded-2xl">
                <div className="flex flex-col items-center bg-white border-3 border-[color:var(--second-color)] rounded-xl p-10 gap-5 shadow-lg">
                    <h1 className="text-4xl text-[color:var(--second-color)] font-bold">🎉 Quiz terminé !</h1>
                    <p className="text-xl text-black">Votre score : <span className="font-bold">{quizResult.score} / {questionResults.length}</span></p>
                    <Link
                        href="/"
                        className="text-lg w-[60%] text-center rounded-xl text-white bg-[color:var(--button-bg-2)] hover:bg-[color:var(--button-bg-2-hover)] cursor-pointer border border-transparent hover:border-white transition-all"
                    >
                        Retour au menu
                    </Link>
                </div>
            </div>
        </div>
    )
}