import prisma from "@/lib/prisma";
import {QuizResult} from "@/types/result";

export async function createQuizResult(resultData: QuizResult) {
    await prisma.quizResult.create({
        data: {
            quiz: { connect: { id: resultData.quiz.id }},
            account: { connect: { id: resultData.account.id }},
            date: resultData.date,
            score: resultData.score
        }
    })
}