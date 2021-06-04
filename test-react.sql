-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 20 jan. 2021 à 13:57
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test-react`
--

-- --------------------------------------------------------

--
-- Structure de la table `component`
--

DROP TABLE IF EXISTS `component`;
CREATE TABLE IF NOT EXISTS `component` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `packaging_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_49FEA1574E7B3801` (`packaging_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `component`
--

INSERT INTO `component` (`id`, `packaging_id`, `name`) VALUES
(1, 1, 'Barquette'),
(2, 1, 'Opercule'),
(3, 1, 'Cartonette'),
(4, 2, 'Conserve'),
(5, 3, 'Caisse'),
(6, 3, 'Couvercle');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210112161019', '2021-01-12 17:10:39', 266);

-- --------------------------------------------------------

--
-- Structure de la table `material`
--

DROP TABLE IF EXISTS `material`;
CREATE TABLE IF NOT EXISTS `material` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `component_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matter` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mass` double NOT NULL,
  `volume` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7CBE7595E2ABAFFF` (`component_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `material`
--

INSERT INTO `material` (`id`, `component_id`, `name`, `matter`, `mass`, `volume`) VALUES
(1, 1, 'Polypropylène', 'Polypropylène', 150, 100),
(2, 2, 'Polychlorure de vinyle', 'Polychlorure de vinyle', 20, 0),
(3, 3, 'Carton plat', 'Carton plat', 10, 0),
(4, 4, 'Acier', 'Acier', 100, 200),
(5, 5, 'Bois peint', 'Bois peint', 500, 2000),
(6, 6, 'Bois brut', 'Bois brut', 100, 0),
(7, 6, 'Polypropylène', 'Polypropylène', 10, 0);

-- --------------------------------------------------------

--
-- Structure de la table `packaging`
--

DROP TABLE IF EXISTS `packaging`;
CREATE TABLE IF NOT EXISTS `packaging` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `packaging`
--

INSERT INTO `packaging` (`id`, `name`) VALUES
(1, 'Barquette PP'),
(2, 'Conserve acier'),
(3, 'Caisse bois');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `component`
--
ALTER TABLE `component`
  ADD CONSTRAINT `FK_49FEA1574E7B3801` FOREIGN KEY (`packaging_id`) REFERENCES `packaging` (`id`);

--
-- Contraintes pour la table `material`
--
ALTER TABLE `material`
  ADD CONSTRAINT `FK_7CBE7595E2ABAFFF` FOREIGN KEY (`component_id`) REFERENCES `component` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
