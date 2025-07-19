import {NextRequest, NextResponse} from "next/server";
import {createQuestionResult} from "@/lib/question/questionResult.service";
import {QuestionResult} from "@/types/result";

export async function POST(req: NextRequest) {
    const body: QuestionResult = await req.json();

    try {
        const result = await createQuestionResult(body);
        return NextResponse.json(result);
    } catch {
        return NextResponse.json({ error: "Erreur lors de l'enregistrement" }, { status: 500 });
    }
}