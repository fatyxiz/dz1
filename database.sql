CREATE DATABASE IF NOT EXISTS cat_survey
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE cat_survey;

CREATE TABLE IF NOT EXISTS responses (
    id          INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    cat_type    TEXT          NOT NULL,
    pet_info    TEXT          NOT NULL,
    liked_site  TINYINT(1)    NOT NULL COMMENT '1 = Да, 2 = Нет',
    created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;