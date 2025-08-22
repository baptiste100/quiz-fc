import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Créer le quiz pour l'équipe de France (niveau facile)
    const franceQuiz = await prisma.quiz.create({
        data: {
            name: "Équipe de France - Niveau Facile",
            difficulty: "EASY",
        },
    });

    const franceEasyQuestions = [
        {
            question: "Combien de Coupes du Monde l'équipe de France a-t-elle remportées ?",
            answer: "2",
            wrong1: "1",
            wrong2: "3",
            wrong3: "4",
        },
        {
            question: "Quel joueur français a déjà marqué un triplé en finale de Coupe du Monde ?",
            answer: "Kylian Mbappé",
            wrong1: "Michel Platini",
            wrong2: "Antoine Griezmann",
            wrong3: "Zinédine Zidane",
        },
        {
            question: "Combien de Championnats d'Europe la France a-t-elle remportés ?",
            answer: "2",
            wrong1: "1",
            wrong2: "3",
            wrong3: "4",
        },
        {
            question: "Qui est le meilleur buteur de l'histoire de l'équipe de France ?",
            answer: "Olivier Giroud",
            wrong1: "Thierry Henry",
            wrong2: "Kylian Mbappé",
            wrong3: "Zinédine Zidane",
        },
        {
            question: "Qui est le joueur le plus capé de l'histoire de l'équipe de France ?",
            answer: "Hugo Lloris",
            wrong1: "Lilian Thuram",
            wrong2: "Antoine Griezmann",
            wrong3: "Olivier Giroud",
        },
        {
            question: "Quelle est la couleur du maillot extérieur de l'équipe de France ?",
            answer: "Blanc",
            wrong1: "Bleu",
            wrong2: "Rouge",
            wrong3: "Noir",
        },
        {
            question: "À quel stade de la compétition la France est-elle arrivée à l'Euro 2024 ?",
            answer: "Demi-finale",
            wrong1: "Poules",
            wrong2: "Huitièmes de finale",
            wrong3: "Quart de finale",
        },
        {
            question: "Qui est le sélectionneur actuel de l'équipe de France ?",
            answer: "Didier Deschamps",
            wrong1: "Zinédine Zidane",
            wrong2: "Luis Enrique",
            wrong3: "Laurent Blanc",
        },
        {
            question: "Quelle équipe la France a-t-elle affrontée lors de la finale de la Coupe du Monde 2018 ?",
            answer: "Croatie",
            wrong1: "Argentine",
            wrong2: "Brésil",
            wrong3: "Allemagne",
        },
        {
            question: "Quand la France a-t-elle organisé la Coupe du Monde pour la dernière fois ?",
            answer: "1998",
            wrong1: "2016",
            wrong2: "2018",
            wrong3: "2006",
        },
    ];

    // Ajouter les questions au quiz nouvellement créé
    for (const question of franceEasyQuestions) {
        await prisma.question.create({
            data: {
                ...question,
                quizId: franceQuiz.id,
            },
        });
    }

    console.log("Quiz et questions ajoutés avec succès !");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });