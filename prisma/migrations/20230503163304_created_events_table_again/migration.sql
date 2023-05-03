-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATETIME(0) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `text` TEXT NOT NULL,
    `branch` VARCHAR(15) NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `image_path` VARCHAR(255) NOT NULL,
    `uploaded_by_id` INTEGER NOT NULL,
    `global` BOOLEAN NOT NULL,
    `past` BOOLEAN NOT NULL,
    `assistence` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
