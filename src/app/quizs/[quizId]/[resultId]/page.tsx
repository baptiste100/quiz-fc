import Link from "next/link";
import { getQuizResultWithQuestionResults } from "@/lib/quiz/quizResult.service";
import {notFound} from "next/navigation";
import {QuizResultWithQuestions} from "@/types/quiz-result";
import {QuestionResult} from "@/types/question-result";
import { Home, Trophy, Target, CheckCircle, XCircle } from "lucide-react";

export default async function PageResult({ params } : { params: Promise<{ resultId: number }>}) {
    const { resultId } = await params;
    const quizResult: QuizResultWithQuestions | null = await getQuizResultWithQuestionResults(resultId);
    if (!quizResult || !quizResult.score) notFound();
    const questionResults: QuestionResult[] = quizResult.questionResults;

    const scorePercentage = Math.round((quizResult.score / questionResults.length) * 100);
    const correctAnswers = questionResults.filter(q => q.isCorrect).length;
    const wrongAnswers = questionResults.length - correctAnswers;

    return (
        <div className="min-h-screen bg-gradient-to-br rounded-xl from-[color:var(--first-color-light)]/20 to-[color:var(--second-color)]/20 p-6 flex items-center justify-center">
            <div className="max-w-2xl w-full space-y-8">
                {/* Header principal */}
                <div className="text-center space-y-4">
                    <div className="text-6xl animate-bounce">🎉</div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--second-color)] bg-clip-text text-transparent">
                        Quiz terminé !
                    </h1>
                </div>

                {/* Carte de résultat principale */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-100">
                    {/* Score principal */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <Trophy className="w-8 h-8 text-[color:var(--second-color)]"/>
                            <h2 className="text-3xl font-bold text-[color:var(--dark-text-color)]">Votre score</h2>
                        </div>
                        <div className="text-6xl font-bold text-[color:var(--second-color)]">
                            {quizResult.score}/{questionResults.length}
                        </div>
                        <div className="text-2xl text-gray-600">
                            {scorePercentage}% de réussite
                        </div>
                    </div>

                    {/* Barre de progression */}
                    <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--second-color)] transition-all duration-1000 ease-out rounded-full"
                                style={{ width: `${scorePercentage}%` }}
                            ></div>
                        </div>
                        <p className="text-center text-sm text-gray-500">Progression : {scorePercentage}%</p>
                    </div>

                    {/* Statistiques détaillées */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-xl p-4 text-center space-y-2 border border-green-200">
                            <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600"/>
                                <span className="font-semibold text-green-800">Bonnes réponses</span>
                            </div>
                            <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                        </div>
                        <div className="bg-red-50 rounded-xl p-4 text-center space-y-2 border border-red-200">
                            <div className="flex items-center justify-center gap-2">
                                <XCircle className="w-5 h-5 text-red-600"/>
                                <span className="font-semibold text-red-800">Erreurs</span>
                            </div>
                            <div className="text-2xl font-bold text-red-600">{wrongAnswers}</div>
                        </div>
                    </div>

                    {/* Message d'encouragement */}
                    <div className="text-center bg-gradient-to-r from-[color:var(--first-color)]/10 to-[color:var(--second-color)]/10 rounded-xl p-4">
                        <p className="text-lg text-[color:var(--dark-text-color)]">
                            {scorePercentage >= 80 ? "🌟 Excellent travail !" :
                                scorePercentage >= 60 ? "👍 Bien joué !" :
                                    scorePercentage >= 40 ? "💪 Vous progressez !" :
                                        "🎯 Continuez vos efforts !"}
                        </p>
                    </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/"
                        className="group flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-[color:var(--first-color)] to-[color:var(--first-color-light)] hover:from-[color:var(--first-color-light)] hover:to-[color:var(--first-color)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <Home className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"/>
                        <span>Retour au menu</span>
                    </Link>
                    <Link
                        href="/quizs"
                        className="group flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-[color:var(--second-color)] to-[color:var(--second-color-light)] hover:from-[color:var(--second-color-light)] hover:to-[color:var(--second-color)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <Target className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"/>
                        <span>Autres quiz</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}