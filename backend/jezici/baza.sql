/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.25-MariaDB : Database - iteh projekat
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`iteh projekat` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `iteh projekat`;



DROP TABLE IF EXISTS `courses`;
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kurs VARCHAR(255) NOT NULL,
    opis TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/*Data for the table `courses` */

INSERT INTO courses (id, kurs, opis, created_at, updated_at) VALUES
(1,'Engleski jezik A1', 'Osnovni nivo engleskog jezika', '2024-01-01 12:00:00', '2024-01-01 12:00:00'),
(2,'Italijanski jezik A1', 'Osnovni nivo italijanskog jezika', '2024-02-01 12:00:00', '2024-02-01 12:00:00'),
(3,'Španski jezik', 'Osnovni nivo španskog jezika', '2024-03-01 12:00:00', '2024-03-01 12:00:00'),
(4,'Engleski jezik B1', 'Srednji nivo engleskog jezika', '2024-01-01 12:00:00', '2024-01-01 12:00:00'),
(5,'Engleski jezik C1', 'Napredni nivo engleskog jezika', '2024-01-01 12:00:00', '2024-01-01 12:00:00');


/*Table structure for table `payments` */

DROP TABLE IF EXISTS `payments`;
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cena DECIMAL(10, 2) NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    currency VARCHAR(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


/*Data for the table `payments` */

INSERT INTO payments (id, cena, user_id, created_at, updated_at, currency) VALUES
(1,10000.00, 1, '2024-01-01 12:00:00', '2024-01-01 12:00:00', 'USD'),
(2, 12000.00, 2, '2024-02-01 12:00:00', '2024-02-01 12:00:00', 'EUR'),
(3, 15000.00, 3, '2024-03-01 12:00:00', '2024-03-01 12:00:00', 'GBP'),
(4, 12500.00, 4, '2024-04-01 12:00:00', '2024-04-01 12:00:00', 'USD'),
(5,13000.00, 5, '2024-05-01 12:00:00', '2024-05-01 12:00:00', 'EUR');






/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;
-- Migracija 1: create_users_table
CREATE TABLE migrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    migration VARCHAR(255) NOT NULL,
    batch INT NOT NULL
);

INSERT INTO migrations (migration, batch) VALUES ('2014_10_12_000000_create_users_table', 1);

-- Migracija 2: create_password_reset_tokens_table
INSERT INTO migrations (migration, batch) VALUES ('2014_10_12_100000_create_password_reset_tokens_table', 1);

-- Migracija 3: create_failed_jobs_table
INSERT INTO migrations (migration, batch) VALUES ('2019_08_19_000000_create_failed_jobs_table', 1);

-- Migracija 4: create_personal_access_tokens_table
INSERT INTO migrations (migration, batch) VALUES ('2019_12_14_000001_create_personal_access_tokens_table', 1);

-- Migracija 5: create_payments_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_14_211836_create_payments_table', 1);

-- Migracija 6: create_courses_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_14_211902_create_courses_table', 1);

-- Migracija 7: create_course_payment_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_17_175233_create_course_payment_table', 1);

-- Migracija 8: change_name_to_username_in_users_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_29_094007_change_name_to_username_in_users_table', 1);

-- Migracija 9: change_username_to_name_in_users_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_29_094532_change_username_to_name_in_users_table', 1);

-- Migracija 10: rename_email_verified_at_to_verified_at_in_users_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_29_095541_rename_email_verified_at_to__verified_at_in_users_table', 2);

-- Migracija 11: remove_id_from_course_payment_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_29_101251_remove_id_from_course_payment_table', 3);

-- Migracija 12: add_currency_to_payments_table
INSERT INTO migrations (migration, batch) VALUES ('2024_05_29_101505_add_currency_to_payments_table', 4);

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `personal_access_tokens` */

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */




DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

INSERT INTO users (id, name, email, email_verified_at, password, remember_token, created_at, updated_at) VALUES
(1, 'Ana Jovanović', 'ana.jovanovic@example.com', '2022-12-22 21:31:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'abc123', '2022-12-22 21:31:41', '2022-12-22 21:31:41'),
(2, 'Marko Petrović', 'marko.petrovic@example.org', '2022-12-22 21:31:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'def456', '2022-12-22 21:31:41', '2022-12-22 21:31:41'),
(3, 'Milica Nikolić', 'milica.nikolic@example.com', '2022-12-22 21:31:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ghi789', '2022-12-22 21:31:41', '2022-12-22 21:31:41'),
(4, 'Stefan Đorđević', 'stefan.djordjevic@gmail.com', NULL, '$2y$10$biauH3hOHQsT3KfLOqefgei8VHEaWNn87BZNA/xSyiHbh1YMEelqG', NULL, '2022-12-22 21:34:49', '2022-12-22 21:34:49'),
(5, 'Jelena Stojanović', 'jelena.stojanovic@gmail.com', NULL, '$2y$10$2TF3LO3gIt/opIY89jrRZelqQJvQxzd1F7Ehbu0/bWZS.P/9b55Pq', NULL, '2022-12-22 22:38:35', '2022-12-22 22:38:35');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
