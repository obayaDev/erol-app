CREATE TABLE `branches`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `name` VARCHAR(255) NOT NULL,
    `branch` VARCHAR(15) NOT NULL,
    `year_in` YEAR NOT NULL,
    `year_out` YEAR NOT NULL,
    `image_path` BIGINT NOT NULL
);
CREATE TABLE `files`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `name` VARCHAR(50) NOT NULL,
    `text` TEXT NOT NULL,
    `branch` VARCHAR(15) NOT NULL,
    `max_update_date` DATE NOT NULL,
    `file_path` VARCHAR(255) NOT NULL,
    `uploaded_by_id` BIGINT NOT NULL
);
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `second_name` VARCHAR(255) NOT NULL,
    `third_name` VARCHAR(255) NOT NULL,
    `phone_number` BIGINT NOT NULL,
    `bracnh` VARCHAR(15) NOT NULL,
    `fingerprint_1` VARCHAR(255) NOT NULL,
    `fingerprint_2` VARCHAR(255) NOT NULL
);
CREATE TABLE `news`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `title` VARCHAR(255) NOT NULL,
    `text` TEXT NOT NULL,
    `image_path` VARCHAR(255) NOT NULL,
    `user_id` BIGINT NOT NULL
);
CREATE TABLE `events`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `date` DATETIME NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `text` TEXT NOT NULL,
    `branch` VARCHAR(15) NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `image_path` VARCHAR(255) NOT NULL,
    `uploaded_by_id` BIGINT NOT NULL,
    `global` TINYINT(1) NOT NULL,
    `past` TINYINT(1) NOT NULL,
    `assistence` JSON NOT NULL
);
CREATE TABLE `childs`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `name` VARCHAR(255) NOT NULL,
    `second_name` VARCHAR(255) NOT NULL,
    `third_name` VARCHAR(255) NOT NULL,
    `year_birth` YEAR NOT NULL,
    `branch` VARCHAR(15) NOT NULL,
    `father_id` BIGINT NOT NULL,
    `mother_id` BIGINT NOT NULL,
    `absences` INT NOT NULL,
    `still_in` TINYINT(1) NOT NULL
);
CREATE TABLE `forms_sleep`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `group` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `second_name` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `time_in` TIME NOT NULL,
    `time_out` TIME NOT NULL,
    `confirmed` TINYINT(1) NOT NULL,
    `confirmed_by_id` BIGINT NOT NULL
);