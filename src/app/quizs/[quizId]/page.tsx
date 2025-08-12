import {getQuizWithQuestions} from "@/lib/quiz/quiz.service";
import QuestionCard from "@/components/features/QuestionCard";
import {notFound} from "next/navigation";
import {Question, QuestionWithShuffledAnswers, ShuffledAnswer} from "@/types/question";
import {getUser} from "@/lib/auth/auth-server";
import {QuizResult} from "@/types/result";
import {Quiz} from "@/types/quiz";
import {User} from "better-auth";

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

async function createQuizResult(quizId: number, userId: string, questions: QuestionWithShuffledAnswers[]) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/quiz-result`, {
        method: "POST",
        body: JSON.stringify({ quizId: quizId, userId: userId, questions: questions}),
        headers: {"Content-Type": "application/json"}
    });

    if (!response.ok) {
        throw new Error(`Failed to create quiz result : ${response.status}`);
    }

    return response.json();
}

export default async function QuizPage({ params }: { params: Promise<{ quizId: string }>}) {
    const { quizId } = await params;
    const quiz: Quiz | null = await getQuizWithQuestions(Number(quizId));
    const user: User | undefined = await getUser();

    if (!user || !quiz || !quiz.questions || quiz.questions.length <= 0) {
        notFound();
    }

    const questions= shuffleArray(quiz.questions).map(convertQuestion);
    const quizResult: QuizResult = await createQuizResult(quiz.id, user.id, questions);

    return (
        <div>
            <QuestionCard questions={questions} quizResultId={quizResult.id}/>
        </div>
    );
}