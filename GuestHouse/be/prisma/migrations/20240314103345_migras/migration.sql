/*
  Warnings:

  - A unique constraint covering the columns `[szobaszam]` on the table `szobak` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `szobak_szobaszam_key` ON `szobak`(`szobaszam`);
