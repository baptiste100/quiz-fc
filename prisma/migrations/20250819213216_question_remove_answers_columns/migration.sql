/*
  Warnings:

  - You are about to drop the column `answer` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `wrong1` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `wrong2` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `wrong3` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "answer",
DROP COLUMN "wrong1",
DROP COLUMN "wrong2",
DROP COLUMN "wrong3";
