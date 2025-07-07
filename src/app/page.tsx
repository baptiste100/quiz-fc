import {getAllQuizzes} from "@/lib/quiz/quiz.service";
import QuizCard from "@/app/QuizCard";
import {Quiz} from "@/types/quiz";

export default async function Home() {
    const quizList: Quiz[] = await getAllQuizzes();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] text-lg items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-4xl font-bold">QUIZ FC</h1>
            <div className="flex flex-wrap gap-10">
                {
                    quizList && quizList.map((quiz) => (
                        <QuizCard key={quiz.id} quiz={quiz}/>
                    ))
                }
            </div>
        </div>
    );
}
