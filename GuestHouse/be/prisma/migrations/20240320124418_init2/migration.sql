/*
  Warnings:

  - You are about to drop the `hetietlap` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `leiras` to the `szobak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `szobak` ADD COLUMN `leiras` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `hetietlap`;

-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `napid` INTEGER NOT NULL,
    `etelid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hetazonosito` INTEGER NOT NULL,
    `napnev` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_napid_fkey` FOREIGN KEY (`napid`) REFERENCES `Nap`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_etelid_fkey` FOREIGN KEY (`etelid`) REFERENCES `Etel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
