
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(200) DEFAULT NULL,
  `productCount` int unsigned DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=6;

LOCK TABLES `category` WRITE;
INSERT INTO `category` VALUES
(1,'Shoes','shoes',NULL,0,'2023-03-01 17:09:00'),
(2,'Technology','tech','',0,NULL);
UNLOCK TABLES;