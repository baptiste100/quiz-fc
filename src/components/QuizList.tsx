import {Quiz} from "@/types/quiz";
import {getAllQuizzes} from "@/lib/quiz/quiz.service";
import QuizCard from "@/components/QuizCard";

export default async function QuizList() {
    const quizList: Quiz[] = await getAllQuizzes();

    return (
        <div className="flex flex-wrap gap-10 font-[family-name:var(--font-geist-sans)]">
                {
                    quizList && quizList.map((quiz) => (
                        <QuizCard key={quiz?.id} quiz={quiz}/>
                    ))
                }
        </div>
    );
}