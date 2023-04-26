/*
  Warnings:

  - The primary key for the `branches` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `branches` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - The primary key for the `childs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `childs` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `father_id` on the `childs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `mother_id` on the `childs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `events` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `uploaded_by_id` on the `events` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `files` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `files` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `uploaded_by_id` on the `files` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `confirmed_by_id` on the `forms_sleep` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `news` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `user_id` on the `news` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `branches` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `childs` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `father_id` INTEGER NOT NULL,
    MODIFY `mother_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `events` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `uploaded_by_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `files` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `uploaded_by_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `forms_sleep` MODIFY `confirmed_by_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `news` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);
