CREATE TABLE IF NOT EXISTS `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=37 ;

INSERT INTO `todo` (`id`, `item`, `status`, `created_at`) VALUES
(8, 'Buy Vodka', 0, '2018-11-19'),
(13, 'Buy Bread', 0, '2018-11-19'),
(15, 'Buy Cheese', 0, '2018-11-19'),
(16, 'Buy Potatos', 0, '2018-11-19'),
(17, 'Buy Herring', 0, '2018-11-19');
