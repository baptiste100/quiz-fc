import {Answer} from "@/types/answer";

export type Question = {
    id: number;
    question: string;
    answer: string | null;
    wrong1: string | null;
    wrong2: string | null;
    wrong3: string | null;
    answers: Answer[]
}

export type QuestionWithShuffledAnswers = {
    id: number
    question: string
    answers: ShuffledAnswer[]
}

export type ShuffledAnswer = {
    text: string | null
    isCorrect: boolean
}
