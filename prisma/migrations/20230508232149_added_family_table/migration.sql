/*
  Warnings:

  - You are about to drop the column `branchId` on the `childs` table. All the data in the column will be lost.
  - You are about to drop the column `father_id` on the `childs` table. All the data in the column will be lost.
  - You are about to drop the column `mother_id` on the `childs` table. All the data in the column will be lost.
  - Added the required column `familyId` to the `childs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `forms_sleep` DROP FOREIGN KEY `forms_sleep_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `familyId` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `childs` DROP COLUMN `branchId`,
    DROP COLUMN `father_id`,
    DROP COLUMN `mother_id`,
    ADD COLUMN `familyId` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `forms_sleep` MODIFY `userId` INTEGER NULL;

-- CreateTable
CREATE TABLE `family` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `branchesId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `childs` ADD CONSTRAINT `childs_familyId_fkey` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `family` ADD CONSTRAINT `family_branchesId_fkey` FOREIGN KEY (`branchesId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `forms_sleep` ADD CONSTRAINT `forms_sleep_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_familyId_fkey` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
