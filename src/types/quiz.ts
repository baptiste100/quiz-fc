import { Difficulty } from "@prisma/client";
import { Question } from "@/types/question";

export type Quiz = {
    id: number;
    name: string;
    difficulty: Difficulty;
    questions?: Question[];
}