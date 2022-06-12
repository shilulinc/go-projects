CREATE USER 'axx_shortme'@'%' IDENTIFIED BY 'a123qwe';
GRANT All privileges ON *.* TO 'shortme'@'%';
USE `shortme`;
DROP TABLE IF EXISTS `links`;
CREATE TABLE `links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` varchar(62) NOT NULL,
  `long_url` varchar(800) NOT NULL,
  `clicks` int(11) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_hash` (`hash`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;