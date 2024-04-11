-- CreateTable
CREATE TABLE `szobak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `szobaszam` INTEGER NOT NULL,
    `felnott_ferohely` INTEGER NOT NULL,
    `gyermek_ferohely` INTEGER NOT NULL,
    `ar_egesz_evben` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendeg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefonszam` VARCHAR(191) NOT NULL,
    `szul_dat` VARCHAR(191) NOT NULL,
    `jelszo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foglalasok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `szid` INTEGER NOT NULL,
    `vendegid` INTEGER NOT NULL,
    `erkezes_datum` VARCHAR(191) NOT NULL,
    `tavozas_datum` VARCHAR(191) NOT NULL,
    `fizetett` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `kategoria` VARCHAR(191) NOT NULL,
    `teiras` VARCHAR(191) NOT NULL,
    `ar` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HetiEtlap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nap` VARCHAR(191) NOT NULL,
    `etelid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EgyebInformaciok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `panzio_nev` VARCHAR(191) NOT NULL,
    `cim` VARCHAR(191) NOT NULL,
    `telefonszam` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Foglalasok` ADD CONSTRAINT `Foglalasok_szid_fkey` FOREIGN KEY (`szid`) REFERENCES `szobak`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Foglalasok` ADD CONSTRAINT `Foglalasok_vendegid_fkey` FOREIGN KEY (`vendegid`) REFERENCES `Vendeg`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HetiEtlap` ADD CONSTRAINT `HetiEtlap_etelid_fkey` FOREIGN KEY (`etelid`) REFERENCES `Etel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
