import {PrismaClient, $Enums} from "@/generated/prisma";
import Difficulty = $Enums.Difficulty;

const prisma = new PrismaClient()

async function main() {
    await prisma.question.deleteMany()
    await prisma.quiz.deleteMany()

    const quizzes = [
        {
            name: "PSG - Niveau facile",
            difficulty: Difficulty.EASY,
            questions: [
                {
                    question: "Quels sont les couleurs du Paris-Saint-Germain",
                    answer: "Rouge et bleu",
                    wrong1: "Bleu et blanc",
                    wrong2: "Rouge et blanc",
                    wrong3: "Bleu"
                },
                {
                    question: "Qui est le plus grand rival du Paris-Saint-Germain ?",
                    answer: "Olympique de Marseille",
                    wrong1: "Olympique Lyonnais",
                    wrong2: "Paris FC",
                    wrong3: "AS Monaco"
                },
                {
                    question: "Qui est le meilleur buteur de l'histoire du Paris-Saint-Germain ?",
                    answer: "Kylian Mbappé",
                    wrong1: "Zlatan Ibrahimovic",
                    wrong2: "Edinson Cavani",
                    wrong3: "Pauleta"
                },
                {
                    question: "Quel est la date de création du Paris-Saint-Germain",
                    answer: "1970",
                    wrong1: "1950",
                    wrong2: "1940",
                    wrong3: "1960"
                }
            ]
        },
        {
            name: "PSG - Niveau moyen",
            difficulty: Difficulty.MEDIUM,
            questions: [
                {
                    question: "Combien de titres de champion de France possède le PSG ?",
                    answer: "13",
                    wrong1: "16",
                    wrong2: "14",
                    wrong3: "15"
                },
                {
                    question: "Combien de titres de coupe de France possède le PSG ?",
                    answer: "13",
                    wrong1: "16",
                    wrong2: "14",
                    wrong3: "15"
                }
            ]
        }
    ]

    // Insérer les données
    for (const quiz of quizzes) {
        await prisma.quiz.create({
            data: {
                name: quiz.name,
                difficulty: quiz.difficulty,
                questions: {
                    create: quiz.questions
                }
            }
        })
    }

    console.log('Seed terminé avec succès!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })