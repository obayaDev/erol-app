/*
  Warnings:

  - The primary key for the `forms_sleep` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `forms_sleep` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `forms_sleep` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
