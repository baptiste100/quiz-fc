import {Quiz} from "@/types/quiz";
import {Question} from "@/types/question";
import {User} from "@/types/user";

export type QuizResult = {
    id: number;
    quiz: Quiz;
    user: User
    date: Date
    score: number
}

export type QuizResultData = {
    id: number;
    quizId: number;
    userId: string;
    date: Date;
    score: number
}

export type QuestionResult = {
    quizResult: QuizResult;
    question: Question;
    isCorrect: boolean
}

export type QuestionResultData = {
    resultId: number;
    questionId: number;
    isCorrect: boolean
}