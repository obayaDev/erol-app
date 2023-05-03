/*
  Warnings:

  - You are about to drop the column `branch` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `branch` on the `childs` table. All the data in the column will be lost.
  - You are about to drop the column `branch` on the `events` table. All the data in the column will be lost.
  - Added the required column `branchesId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchId` to the `childs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_authorId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `branch`,
    ADD COLUMN `branchesId` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `childs` DROP COLUMN `branch`,
    ADD COLUMN `branchId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `branch`,
    ADD COLUMN `branchId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_branchesId_fkey` FOREIGN KEY (`branchesId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
