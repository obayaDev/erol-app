/*
  Warnings:

  - You are about to drop the column `uploaded_by_id` on the `events` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `uploaded_by_id`,
    ADD COLUMN `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
