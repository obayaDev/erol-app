/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `date` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `second_name` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `time_in` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to drop the column `time_out` on the `forms_sleep` table. All the data in the column will be lost.
  - You are about to alter the column `group` on the `forms_sleep` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `email` on the `forms_sleep` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `name` on the `forms_sleep` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `branch` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `capsQuatitiy` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childQuatitiy` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateIn` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOut` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `forms_sleep` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `emailVerified`,
    DROP COLUMN `image`,
    ADD COLUMN `branch` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'fam',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `forms_sleep` DROP COLUMN `date`,
    DROP COLUMN `second_name`,
    DROP COLUMN `time_in`,
    DROP COLUMN `time_out`,
    ADD COLUMN `capsQuatitiy` VARCHAR(191) NOT NULL,
    ADD COLUMN `childQuatitiy` VARCHAR(191) NOT NULL,
    ADD COLUMN `comments` TEXT NOT NULL,
    ADD COLUMN `dateIn` DATETIME(3) NOT NULL,
    ADD COLUMN `dateOut` DATETIME(3) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    MODIFY `group` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Account`;

-- DropTable
DROP TABLE `Session`;

-- DropTable
DROP TABLE `VerificationToken`;

-- DropTable
DROP TABLE `users`;
