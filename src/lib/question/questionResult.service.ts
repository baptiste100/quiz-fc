import {QuestionResult} from "@/types/question-result";
import prisma from "@/lib/prisma";

export async function createQuestionResult(questionResultData: QuestionResult) {
    return prisma.questionResult.create({
        data: {
            result: { connect: { id: questionResultData.resultId }},
            question: { connect: { id: questionResultData.questionId }},
            isCorrect: questionResultData.isCorrect
        }
    })
}