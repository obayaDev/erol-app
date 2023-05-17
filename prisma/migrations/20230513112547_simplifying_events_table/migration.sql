/*
  Warnings:

  - You are about to drop the column `authorId` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `global` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `image_path` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `authorId`,
    DROP COLUMN `global`,
    DROP COLUMN `image_path`;
