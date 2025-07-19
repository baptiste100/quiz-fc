import {Quiz} from "@/types/quiz";
import {Account} from "better-auth/types";
import {Question} from "@/types/question";

export type QuizResult = {
    id: number;
    quiz: Quiz;
    account: Account
    date: Date
    score: number
}

export type QuestionResult = {
    quizResult: QuizResult;
    question: Question;
    isCorrect: boolean
}