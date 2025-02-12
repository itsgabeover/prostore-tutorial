/*
  Warnings:

  - You are about to drop the column `ISfEATURED` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ISfEATURED",
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
