/*
  Warnings:

  - Added the required column `branchesId` to the `childs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `events_authorId_fkey` ON `events`;

-- AlterTable
ALTER TABLE `childs` ADD COLUMN `branchesId` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `childs` ADD CONSTRAINT `childs_branchesId_fkey` FOREIGN KEY (`branchesId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
