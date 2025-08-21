import AccountTabHeader from "@/components/layout/accountTabHeader";
import PlayerResults from "@/components/features/PlayerResults";
import {User} from "better-auth";
import {getUser} from "@/lib/auth/auth-server";
import {QuizResultWithQuestionsAndQuiz} from "@/types/quiz-result";
import {getQuizResultsOfUser} from "@/lib/quiz/quizResult.service";
import {redirect} from "next/navigation";

export default async function ResultsPage() {
    const user: User | undefined = await getUser();
    if (!user) { redirect("/"); }
    const quizResults: QuizResultWithQuestionsAndQuiz[] = await getQuizResultsOfUser(user.id);

    return (
        <div className="bg-white shadow-lg border border-gray-100 p-6">
            <AccountTabHeader tabTitle="Mes résultats"/>
            <PlayerResults quizResults={quizResults.reverse()}/>
        </div>
    )
}