-- AlterTable
ALTER TABLE `forms_sleep` MODIFY `group` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `confirmed` BOOLEAN NULL,
    MODIFY `confirmed_by_id` BIGINT NULL,
    MODIFY `capsQuatitiy` VARCHAR(191) NULL,
    MODIFY `childQuatitiy` VARCHAR(191) NULL,
    MODIFY `comments` TEXT NULL,
    MODIFY `dateIn` DATETIME(3) NULL,
    MODIFY `dateOut` DATETIME(3) NULL,
    MODIFY `firstName` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL;
