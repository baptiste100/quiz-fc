import {Quiz} from "@/types/quiz";
import {QuestionResult, QuestionResultWithQuestion} from "@/types/question-result";

export type QuizResult = {
    id: number;
    quizId: number;
    userId: string;
    date: Date;
    score: number | null
}

export type QuizResultWithQuestions = QuizResult & {
    questionResults: QuestionResult[];
}

export type QuizResultWithQuestionsAndQuiz = QuizResult & {
    quiz: Quiz;
    questionResults: QuestionResultWithQuestion[];
}

export type QuizResultWithQuiz = QuizResult & {
    quiz: Quiz;
}