-- CreateTable
CREATE TABLE "result" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "accountId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,

    CONSTRAINT "result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_result" (
    "questionId" INTEGER NOT NULL,
    "resultId" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,

    CONSTRAINT "question_result_pkey" PRIMARY KEY ("questionId","resultId")
);

-- AddForeignKey
ALTER TABLE "result" ADD CONSTRAINT "result_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "result" ADD CONSTRAINT "result_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_result" ADD CONSTRAINT "question_result_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_result" ADD CONSTRAINT "question_result_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "result"("id") ON DELETE CASCADE ON UPDATE CASCADE;
