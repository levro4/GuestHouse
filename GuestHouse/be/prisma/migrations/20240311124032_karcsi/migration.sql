-- CreateTable
CREATE TABLE `Kepek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `szobaid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kepek` ADD CONSTRAINT `Kepek_szobaid_fkey` FOREIGN KEY (`szobaid`) REFERENCES `szobak`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
