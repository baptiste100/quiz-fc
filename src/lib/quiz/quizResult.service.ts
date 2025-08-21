import prisma from "@/lib/prisma";
import {QuizResult} from "@/types/quiz-result";

export async function createQuizResult(resultData: QuizResult) {
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
    });
}

export async function getQuizResultsOfUser(userId: string) {
    return prisma.quizResult.findMany({
        where: {
            userId: userId
        },
        include: {
            quiz: true,
            questionResults: {
                include: {
                    question: {
                        include: {
                            answers: true
                        }
                    }
                }
            }
        }
    })
}