import {getQuizWithQuestions} from "@/lib/quiz/quiz.service";
import QuestionCard from "@/components/QuestionCard";
import {notFound} from "next/navigation";
import * as querystring from "node:querystring";
import {Question, QuestionWithShuffledAnswers, ShuffledAnswer} from "@/types/question";

function shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
}

function convertQuestion(q: Question): QuestionWithShuffledAnswers {
    const answers: ShuffledAnswer[] = shuffleArray([
        { text: q.answer, isCorrect: true },
        { text: q.wrong1, isCorrect: false },
        { text: q.wrong2, isCorrect: false },
        { text: q.wrong3, isCorrect: false },
    ]);

    return {
        id: q.id,
        question: q.question,
        answers,
    };
}

export default async function QuizPage({ params }: { params: { quizId: string }}) {
    const quiz = await getQuizWithQuestions(Number(params.quizId));

    if (!quiz || quiz.questions.length <= 0) {
        notFound();
    }

    const questions= shuffleArray(quiz.questions).map(convertQuestion);

    return (
        <div className="flex flex-col items-center gap-5 px-10 py-5">
            <h1 className="text-3xl font-bold">{quiz.name}</h1>
            <QuestionCard questions={questions}/>
        </div>
    );
}