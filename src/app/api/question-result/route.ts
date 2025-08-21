import {NextRequest, NextResponse} from "next/server";
import {createQuestionResult} from "@/lib/question/questionResult.service";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);

    try {
        const result = await createQuestionResult(body);
        return NextResponse.json(result);
    } catch(error) {
        console.error("Erreur lors de l'enregistrement d'une question :", error);
        return NextResponse.json({ error: "Erreur lors de l'enregistrement d'une question" }, { status: 500 });
    }
}