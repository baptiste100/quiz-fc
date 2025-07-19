import {NextRequest, NextResponse} from "next/server";
import {createQuizResult} from "@/lib/quiz/quizResult.service";
import {QuizResult} from "@/types/result";

export async function POST(req: NextRequest) {
    const body: QuizResult = await req.json();

    try {
        const result = await createQuizResult(body);
        return NextResponse.json(result);
    } catch {
        return NextResponse.json({ error: "Erreur lors de l'enregistrement" }, { status: 500 });
    }
}