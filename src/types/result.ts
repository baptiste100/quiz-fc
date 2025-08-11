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

export type QuestionResult = {
    resultId: number;
    questionId: number;
    isCorrect: boolean
}