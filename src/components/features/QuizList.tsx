import {Quiz} from "@/types/quiz";
import {getAllQuizzes} from "@/lib/quiz/quiz.service";
import QuizCard from "@/components/features/QuizCard";
import {getUser} from "@/lib/auth/auth-server";
import {User} from "better-auth";

export default async function QuizList() {
    const quizList: Quiz[] = await getAllQuizzes();
    const user: User | undefined = await getUser();
    const isConnectedUser: boolean = !!user;

    return (
        <div className="flex flex-wrap gap-10 font-[family-name:var(--font-geist-sans)]">
                {
                    quizList && quizList.map((quiz) => (
                        <QuizCard key={quiz?.id} quiz={quiz} isConnectedUser={isConnectedUser}/>
                    ))
                }
        </div>
    );
}