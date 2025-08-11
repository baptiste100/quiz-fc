import prisma from "@/lib/prisma";
import {QuizResultData} from "@/types/result";
import {notFound} from "next/navigation";

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

export async function getQuizResultWithQuestionResults(resultId: number) {
   return prisma.quizResult.findUnique({
        where: {
            id: +resultId
        },
        include: {
            questionResults: true
        }
    })
}