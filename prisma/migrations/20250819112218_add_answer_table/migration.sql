-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "answer" DROP NOT NULL,
ALTER COLUMN "wrong1" DROP NOT NULL,
ALTER COLUMN "wrong2" DROP NOT NULL,
ALTER COLUMN "wrong3" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "answerText" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
