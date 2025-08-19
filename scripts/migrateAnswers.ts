import prisma from "@/lib/prisma";

async function main() {
    const questions = await prisma.question.findMany();

    for (const q of questions) {
        if (!q.answer || !q.wrong1 || !q.wrong2 || !q.wrong3) {
            console.log(`⚠️ Question ${q.id} incomplète, ignorée`);
            continue;
        }

        // Bonne réponse
        await prisma.answer.create({
            data: {
                answerText: q.answer,
                isCorrect: true,
                questionId: q.id,
            },
        });

        // Mauvaises réponses
        for (const wrong of [q.wrong1, q.wrong2, q.wrong3]) {
            await prisma.answer.create({
                data: {
                    answerText: wrong,
                    isCorrect: false,
                    questionId: q.id,
                },
            });
        }
    }

    console.log("✅ Migration des réponses terminée !");
}

main()
    .then(() => prisma.$disconnect())
    .catch((err) => {
        console.error(err);
        prisma.$disconnect();
    });
