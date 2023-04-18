/*
  Warnings:

  - Made the column `group` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `confirmed` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `confirmed_by_id` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `capsQuatitiy` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `childQuatitiy` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comments` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateIn` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateOut` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstName` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `forms_sleep` MODIFY `group` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `confirmed` BOOLEAN NOT NULL,
    MODIFY `confirmed_by_id` BIGINT NOT NULL,
    MODIFY `capsQuatitiy` VARCHAR(191) NOT NULL,
    MODIFY `childQuatitiy` VARCHAR(191) NOT NULL,
    MODIFY `comments` TEXT NOT NULL,
    MODIFY `dateIn` DATETIME(3) NOT NULL,
    MODIFY `dateOut` DATETIME(3) NOT NULL,
    MODIFY `firstName` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL;
