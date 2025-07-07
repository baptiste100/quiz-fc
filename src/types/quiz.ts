import {Difficulty} from "@/generated/prisma";

export type Quiz = {
    id: number;
    name: string;
    difficulty: Difficulty
}

