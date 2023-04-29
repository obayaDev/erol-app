/*
  Warnings:

  - Made the column `emailSend` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `forms_sleep` MODIFY `emailSend` INTEGER NOT NULL;
