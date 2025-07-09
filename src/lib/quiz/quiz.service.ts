import prisma from "@/lib/prisma";

export async function getAllQuizzes() {
    return prisma.quiz.findMany();
}

export async function getQuizWithTitleOnly(quizId: number) {
    return prisma.quiz.findUnique({
        where: { id: quizId },
        select: { id: true, name: true, difficulty: true }
    })
}

export async function getQuizWithQuestions(quizId: number) {
    return prisma.quiz.findUnique({
        where: { id: quizId },
        include: {
            questions: true
        }
    })
}