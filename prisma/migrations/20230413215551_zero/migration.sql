/*
  Warnings:

  - Added the required column `capsQuatitiy` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childQuatitiy` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirmed` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirmed_by_id` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateIn` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOut` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `forms_sleep` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `forms_sleep` ADD COLUMN `capsQuatitiy` VARCHAR(191) NOT NULL,
    ADD COLUMN `childQuatitiy` VARCHAR(191) NOT NULL,
    ADD COLUMN `comments` TEXT NOT NULL,
    ADD COLUMN `confirmed` BOOLEAN NOT NULL,
    ADD COLUMN `confirmed_by_id` BIGINT NOT NULL,
    ADD COLUMN `dateIn` DATETIME(3) NOT NULL,
    ADD COLUMN `dateOut` DATETIME(3) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `group` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
