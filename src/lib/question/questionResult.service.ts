import {QuestionResult} from "@/types/result";
import prisma from "@/lib/prisma";

export async function createQuestionResult(resultData: QuestionResult) {
    await prisma.questionResult.create({
        data: {
            result: { connect: { id: resultData.quizResult.id }},
            question: { connect: { id: resultData.question.id }},
            isCorrect: resultData.isCorrect
        }
    })
}