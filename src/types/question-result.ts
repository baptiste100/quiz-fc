import {Question} from "@/types/question";

export type QuestionResult = {
    resultId: number;
    questionId: number;
    isCorrect: boolean;
    givenAnswerId: number | null;
}

export type QuestionResultWithQuestion = QuestionResult & {
    question: Question
}