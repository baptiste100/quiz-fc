/*
  Warnings:

  - You are about to drop the column `accountId` on the `result` table. All the data in the column will be lost.
  - Added the required column `userId` to the `result` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "result" DROP CONSTRAINT "result_accountId_fkey";

-- AlterTable
ALTER TABLE "result" DROP COLUMN "accountId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "result" ADD CONSTRAINT "result_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
