/*
  Warnings:

  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_branchesId_fkey`;

-- DropTable
DROP TABLE `events`;

-- CreateTable
CREATE TABLE `activities` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `name` VARCHAR(75) NOT NULL,
    `past` BOOLEAN NOT NULL,
    `fileDate` DATETIME(3) NULL,
    `filePath` TEXT NULL,
    `assistence` JSON NULL,
    `branchesId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `activities` ADD CONSTRAINT `activities_branchesId_fkey` FOREIGN KEY (`branchesId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
