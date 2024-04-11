/*
  Warnings:

  - You are about to drop the column `teiras` on the `etel` table. All the data in the column will be lost.
  - Added the required column `leiras` to the `Etel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `etel` DROP COLUMN `teiras`,
    ADD COLUMN `leiras` VARCHAR(191) NOT NULL;
