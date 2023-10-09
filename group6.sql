-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 09, 2023 at 05:27 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group6`
--

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
CREATE TABLE IF NOT EXISTS `grades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `score` float NOT NULL,
  `subject_id` int NOT NULL,
  `student_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `subject_id` (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `score`, `subject_id`, `student_id`) VALUES
(26, 80, 1, 1),
(27, 80, 10, 1),
(28, 60, 11, 1),
(29, 76, 12, 1),
(30, 87, 13, 1),
(31, 58, 14, 1),
(32, 90, 15, 1),
(33, 65, 16, 1),
(34, 71, 17, 1),
(35, 70, 1, 3),
(36, 90, 10, 3),
(37, 67, 11, 3),
(38, 50, 12, 3),
(39, 50, 13, 3),
(40, 60, 14, 3),
(41, 89, 15, 3),
(42, 75, 16, 3),
(43, 60, 17, 3),
(44, 67, 1, 4),
(45, 90, 10, 4),
(46, 76, 11, 4),
(47, 55, 12, 4),
(48, 87, 13, 4),
(49, 55, 14, 4),
(50, 70, 15, 4),
(51, 46, 16, 4),
(52, 67, 17, 4),
(53, 95, 1, 5),
(54, 60, 10, 5),
(55, 56, 11, 5),
(56, 64, 12, 5),
(57, 50, 13, 5),
(58, 62, 14, 5),
(59, 78, 15, 5),
(60, 61, 16, 5),
(61, 87, 17, 5),
(62, 20, 1, 6),
(63, 80, 10, 6),
(64, 58, 11, 6),
(65, 24, 12, 6),
(66, 99, 13, 6),
(67, 12, 14, 6),
(68, 98, 15, 6),
(69, 34, 16, 6),
(70, 26, 17, 6),
(71, 70, 1, 7),
(72, 68, 10, 7),
(73, 50, 11, 7),
(74, 50, 12, 7),
(75, 79, 13, 7),
(76, 60, 14, 7),
(77, 52, 15, 7),
(78, 57, 16, 7),
(79, 61, 17, 7),
(80, 35, 1, 8),
(81, 46, 10, 8),
(82, 79, 11, 8),
(83, 58, 12, 8),
(84, 70, 13, 8),
(85, 62, 14, 8),
(86, 46, 15, 8),
(87, 35, 16, 8),
(88, 73, 17, 8),
(89, 90, 1, 9),
(90, 88, 10, 9),
(91, 70, 11, 9),
(92, 59, 12, 9),
(93, 54, 13, 9),
(94, 20, 14, 9),
(95, 90, 15, 9),
(96, 12, 16, 9),
(97, 43, 17, 9),
(98, 95, 1, 10),
(99, 80, 10, 10),
(100, 82, 11, 10),
(101, 64, 12, 10),
(102, 96, 13, 10),
(103, 72, 14, 10),
(104, 84, 15, 10),
(105, 56, 16, 10),
(106, 97, 17, 10),
(107, 70, 1, 11),
(108, 80, 10, 11),
(109, 60, 11, 11),
(110, 45, 12, 11),
(111, 100, 13, 11),
(112, 80, 14, 11),
(113, 75, 15, 11),
(114, 87, 16, 11),
(115, 40, 17, 11),
(116, 80, 1, 12),
(117, 70, 10, 12),
(118, 50, 1, 14),
(119, 60, 10, 14),
(120, 70, 11, 14),
(121, 79, 12, 14),
(122, 95, 13, 14),
(123, 15, 14, 14),
(124, 90, 15, 14),
(125, 80, 16, 14),
(126, 12, 17, 14),
(142, 90, 1, 15),
(143, 98, 10, 15),
(144, 88, 11, 15),
(145, 90, 12, 15),
(146, 92, 13, 15),
(147, 78, 14, 15),
(148, 89, 15, 15),
(149, 90, 16, 15),
(150, 96, 17, 15),
(151, 80, 11, 12),
(152, 90, 12, 12),
(153, 74, 13, 12),
(154, 88, 14, 12),
(155, 95, 15, 12),
(156, 80, 16, 12),
(157, 97, 17, 12);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `gender` char(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `surname`, `gender`) VALUES
(1, 'Immaculate', 'Makwinja', 'F'),
(3, 'Doreen', 'Mchekeni', 'F'),
(4, 'Joyce', 'Mtawali', 'F'),
(5, 'Grace', 'Gausi', 'F'),
(6, 'Ice', 'Spice', 'F'),
(7, 'John', 'Doe', 'M'),
(8, 'Chris', 'Johns', 'M'),
(9, 'David', 'Goliath', 'M'),
(10, 'Symon', 'Peter', 'M'),
(11, 'Zeze', 'Kingston', 'M'),
(12, 'Offset', 'Cephas', 'M'),
(14, 'Nick', 'Minaj', 'F'),
(15, 'John', 'Banda', 'M');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `teacher_id` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `teacher_id`) VALUES
(1, 'Bible Knowledge', 1),
(10, 'Life Skills', 8),
(11, 'Social Studies', 12),
(12, 'Mathematics', 6),
(13, 'Expressive Arts', 9),
(14, 'Chichewa', 11),
(15, 'English', 9),
(16, 'Agriculture', 7),
(17, 'Science & Technology', 1);

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
CREATE TABLE IF NOT EXISTS `teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `gender` char(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `firstname`, `surname`, `gender`) VALUES
(1, 'Morgan', 'Manyengo', 'M'),
(4, 'Moshie', 'Mchekeni', 'F'),
(6, 'Watipa', 'Sibande', 'M'),
(7, 'Ellen', 'Upindi', 'F'),
(8, 'Mary', 'Sedi', 'F'),
(9, 'Eliza', 'Chigwale', 'F'),
(10, 'Sheila', 'Makwinja', 'F'),
(11, 'Charles', 'Kawerawera', 'M'),
(12, 'Bukayo', 'Saka', 'M'),
(13, 'Fahad', 'Phiri', 'M');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`);

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
