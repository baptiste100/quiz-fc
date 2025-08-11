import prisma from "@/lib/prisma";
import {QuizResultData} from "@/types/result";

export async function createQuizResult(resultData: QuizResultData) {
    return prisma.quizResult.create({
        data: {
            quiz: { connect: { id: resultData.quizId }},
            user: { connect: { id: resultData.userId }},
            date: resultData.date,
            score: resultData.score
        }
    })
}

export async function updateScore(resultId: number, newScore: number) {
    return prisma.quizResult.update({
        where: {
            id: resultId
        },
        data: {
            score: newScore
        }
    })
}