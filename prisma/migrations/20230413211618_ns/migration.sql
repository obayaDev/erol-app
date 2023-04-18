/*
  Warnings:

  - You are about to drop the column `capsQuatitiy` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `childQuatitiy` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `confirmed` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `confirmed_by_id` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `dateIn` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `dateOut` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `forms_sleep` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `forms_sleep` DROP COLUMN `capsQuatitiy`,
    DROP COLUMN `childQuatitiy`,
    DROP COLUMN `comments`,
    DROP COLUMN `confirmed`,
    DROP COLUMN `confirmed_by_id`,
    DROP COLUMN `dateIn`,
    DROP COLUMN `dateOut`,
    DROP COLUMN `email`,
    DROP COLUMN `firstName`,
    DROP COLUMN `group`,
    DROP COLUMN `phone`;
