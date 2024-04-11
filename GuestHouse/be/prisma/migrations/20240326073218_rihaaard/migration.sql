-- DropForeignKey
ALTER TABLE `foglalasok` DROP FOREIGN KEY `Foglalasok_szid_fkey`;

-- DropForeignKey
ALTER TABLE `foglalasok` DROP FOREIGN KEY `Foglalasok_vendegid_fkey`;

-- DropForeignKey
ALTER TABLE `kepek` DROP FOREIGN KEY `Kepek_szobaid_fkey`;

-- DropForeignKey
ALTER TABLE `menu` DROP FOREIGN KEY `Menu_etelid_fkey`;

-- DropForeignKey
ALTER TABLE `menu` DROP FOREIGN KEY `Menu_napid_fkey`;

-- AddForeignKey
ALTER TABLE `Foglalasok` ADD CONSTRAINT `Foglalasok_szid_fkey` FOREIGN KEY (`szid`) REFERENCES `szobak`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Foglalasok` ADD CONSTRAINT `Foglalasok_vendegid_fkey` FOREIGN KEY (`vendegid`) REFERENCES `Vendeg`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_napid_fkey` FOREIGN KEY (`napid`) REFERENCES `Nap`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_etelid_fkey` FOREIGN KEY (`etelid`) REFERENCES `Etel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kepek` ADD CONSTRAINT `Kepek_szobaid_fkey` FOREIGN KEY (`szobaid`) REFERENCES `szobak`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
