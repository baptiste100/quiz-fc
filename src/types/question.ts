import {Answer} from "@/types/answer";

export type Question = {
    id: number;
    question: string;
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
