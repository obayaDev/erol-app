/*
  Warnings:

  - You are about to drop the column `branch` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `uploaded_by_id` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `confirmed_by_id` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `news` table. All the data in the column will be lost.
  - Added the required column `branchesId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchesId` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `global` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `global` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `branchesId` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `files` DROP COLUMN `branch`,
    DROP COLUMN `uploaded_by_id`,
    ADD COLUMN `branchesId` INTEGER UNSIGNED NOT NULL,
    ADD COLUMN `global` BOOLEAN NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `forms_sleep` DROP COLUMN `confirmed_by_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `news` DROP COLUMN `user_id`,
    ADD COLUMN `global` BOOLEAN NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_branchesId_fkey` FOREIGN KEY (`branchesId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_branchesId_fkey` FOREIGN KEY (`branchesId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `forms_sleep` ADD CONSTRAINT `forms_sleep_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `news` ADD CONSTRAINT `news_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
