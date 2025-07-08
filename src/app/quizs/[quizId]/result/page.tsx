import Link from "next/link";

export default function PageResult({ searchParams } : { searchParams: { score: number, total: number }}) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br p-20 rounded-2xl from-green-600 via-green-800 to-black text-white">
                <div className="flex flex-col items-center bg-neutral-900 rounded-xl p-10 gap-5 shadow-lg">
                    <h1 className="text-4xl font-bold">🎉 Quiz terminé !</h1>
                    <p className="text-xl">Votre score : <span className="font-bold">{searchParams.score} / {searchParams.total}</span></p>
                    <Link
                        href="/"
                        className="text-lg w-[80%] text-center p-3 rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer border border-transparent hover:border-white transition-all"
                    >
                        Retour au menu
                    </Link>
                </div>
            </div>
        </div>
    )
}