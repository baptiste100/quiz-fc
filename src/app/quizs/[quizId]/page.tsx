import {getQuizWithQuestions} from "@/lib/quiz/quiz.service";
import QuestionCard from "@/components/QuestionCard";
import {notFound} from "next/navigation";
import {Quiz} from "@/types/quiz";

export default async function QuizPage({ params }: { params: { quizId: string }}) {
    const quiz = await getQuizWithQuestions(Number(params.quizId));

    if (!quiz) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-5 px-10 py-5">
            <h1 className="text-3xl font-bold">{quiz.name}</h1>
            <QuestionCard quiz={quiz}/>
        </div>
    );
}