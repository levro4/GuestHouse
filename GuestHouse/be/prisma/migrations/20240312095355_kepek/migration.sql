/*
  Warnings:

  - You are about to drop the column `szobakep` on the `szobak` table. All the data in the column will be lost.
  - Added the required column `szobakep` to the `Kepek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kepek` ADD COLUMN `szobakep` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `szobak` DROP COLUMN `szobakep`;
