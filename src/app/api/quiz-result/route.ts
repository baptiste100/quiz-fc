import {NextRequest, NextResponse} from "next/server";
import {createQuizResult} from "@/lib/quiz/quizResult.service";

export async function POST(req: NextRequest) {
    const body= await req.json();

    try {
        const result = await createQuizResult(body);
        return NextResponse.json(result);
    } catch(error) {
        console.error("Erreur lors de l'enregistrement du quiz :", error);
        return NextResponse.json({ error: "Erreur lors de l'enregistrement du quiz" }, { status: 500 });
    }
}