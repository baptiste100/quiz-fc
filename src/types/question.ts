export type Question = {
    id: number;
    question: string;
    answer: string;
    wrong1: string;
    wrong2: string;
    wrong3: string;
}

export type QuestionWithShuffledAnswers = {
    id: number
    question: string
    answers: ShuffledAnswer[]
}

export type ShuffledAnswer = {
    text: string
    isCorrect: boolean
}
