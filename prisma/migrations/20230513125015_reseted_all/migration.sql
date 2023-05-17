/*
  Warnings:

  - Made the column `assistence` on table `activities` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `activities` MODIFY `assistence` JSON NOT NULL;
