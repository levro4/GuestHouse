/*
  Warnings:

  - You are about to drop the column `etelid` on the `hetietlap` table. All the data in the column will be lost.
  - Added the required column `a` to the `HetiEtlap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b` to the `HetiEtlap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `c` to the `HetiEtlap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `hetietlap` DROP FOREIGN KEY `HetiEtlap_etelid_fkey`;

-- AlterTable
ALTER TABLE `hetietlap` DROP COLUMN `etelid`,
    ADD COLUMN `a` VARCHAR(191) NOT NULL,
    ADD COLUMN `b` VARCHAR(191) NOT NULL,
    ADD COLUMN `c` VARCHAR(191) NOT NULL;
