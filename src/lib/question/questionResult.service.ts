import {QuestionResult} from "@/types/question-result";
import prisma from "@/lib/prisma";

export async function createQuestionResult(questionResult: QuestionResult) {
    return prisma.questionResult.create({
        data: {
            result: { connect: { id: questionResult.resultId }},
            question: { connect: { id: questionResult.questionId }},
            isCorrect: questionResult.isCorrect,
            givenAnswerId: questionResult.givenAnswerId
        }
    })
}