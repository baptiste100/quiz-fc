import prisma from "@/lib/prisma";

export async function getAllQuizzes() {
    return prisma.quiz.findMany();
}