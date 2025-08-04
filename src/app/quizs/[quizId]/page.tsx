import {getQuizWithQuestions} from "@/lib/quiz/quiz.service";
import QuestionCard from "@/components/features/QuestionCard";
import {notFound} from "next/navigation";
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

export default async function QuizPage({ params }: { params: Promise<{ quizId: string }>}) {
    const { quizId } = await params;
    const quiz = await getQuizWithQuestions(Number(quizId));

    if (!quiz || quiz.questions.length <= 0) {
        notFound();
    }

    const questions= shuffleArray(quiz.questions).map(convertQuestion);

    return (
        <div>
            <QuestionCard questions={questions} quizId={quiz.id}/>
        </div>
    );
}