import QuizList from "@/components/features/QuizList";

export default async function QuizzesPage() {
    return (
        <div className="flex flex-col gap-5 px-10 py-5">
            <h1 className="text-3xl font-bold">Tous les quizs</h1>
            <QuizList/>
        </div>
    );
}
