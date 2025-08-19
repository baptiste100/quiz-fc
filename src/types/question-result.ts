import {Question} from "@/types/question";

export type QuestionResult = {
    resultId: number;
    questionId: number;
    isCorrect: boolean
}

export type QuestionResultWithQuestion = QuestionResult & {
    question: Question
}