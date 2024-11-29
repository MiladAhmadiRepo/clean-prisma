/*
  Warnings:

  - You are about to drop the column `contecnt` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `contecnt` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `content` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Review` DROP COLUMN `contecnt`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `contecnt`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;
