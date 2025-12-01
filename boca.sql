-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: bocajuniors
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `codigo` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(80) COLLATE latin1_spanish_ci NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `imagen` varchar(60) COLLATE latin1_spanish_ci DEFAULT NULL,
  `idrubro` int NOT NULL,
  PRIMARY KEY (`codigo`,`idrubro`),
  KEY `fk_articulos_rubros_idx` (`idrubro`),
  CONSTRAINT `fk_articulos_rubros` FOREIGN KEY (`idrubro`) REFERENCES `rubros` (`idrubros`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES ('4067896112831','Buzo WMN DKHD',70000.00,'buzo WMN.PNG',2),('4067896721321','Campera de invierno Boca Jrs',80000.00,'camperainvierno.webp',2),('4067896721743','Campera de Presentación 24/25',85000.00,'campera presentacion.PNG',2),('4067901600773','Pantalon Deportivo UBP Boca Jrs',70000.00,'pantalon deportivo.WEBP',3),('4067901874907','Tercera Camiseta Boca Jrs 25/26',50000.00,'tercera equipacion.PNG',1),('4068803370849','Short Titular Authentic Boca Jrs 25/26',70000.00,'shortitular.WEBP',3),('4068806414946','Camiseta Titular Boca Jrs 25/26 JUNIOR',50000.00,'camiseta titular.WEBP',1),('4068806422569','Camiseta Pre Partido Boca Jrs',65000.00,'camiseta pre partido.PNG',1),('4068806422729','Camiseta de Arquero 25/26 Boca Jrs',80000.00,'camiseta de arquero.PNG',1),('4068806446323','Pack Gamer CABJ - Único',30000.00,'combogamer.PNG',4),('4068807285903','Pantalón de Entrenamiento Boca Jrs',80000.00,'pantalon de entrenamiento.PNG',3),('4068807328150','Pantalón de Presentación 25/26 Boca Jrs',80000.00,'pantalon de presentacion.PNG',3),('4068807347434','Campera De Presentación Tiro 25',70000.00,'campera de presentacion.WEBP',2),('4068808893454','Buzo Ligero de Entrenamiento 24/25',70000.00,'buzo ligero.webp',2),('4068808893893','Camiseta Alternativa 25/26 Boca Jrs JUNIOR',70000.00,'camiseta alternativa.PNG',1),('4068808893893','Combo Matero Boca Jrs',60000.00,'combo matero.PNG',4),('4068808924276','Short Alternativo Authentic 25/26 Boca Jrs',60000.00,'shortalternativo.PNG',3),('4068809481303','Buzo Terrace Icons Boca Jrs',90000.00,'buzo terrace.WEBP',2),('4068809546552','Short Terrace Icons Boca Jrs',50000.00,'shortterrace.WEBP',3),('4068811467975','Camiseta Titular Authentic 25/26 Manga Larga',180000.00,'camiseta mangalarga.PNG',1),('4068865465242','Bolso Deportivo Boca Jrs - Unico',15000.00,'bolso.WEBP',4),('4068865465249','Mate Imperial Calabaza Boca Jrs - Único',45000.00,'mate.PNG',4),('7798407271767','Combo Tabla + Vaso Fernetero Boca Jrs - Único',25000.00,'combo tabla y vaso.PNG',4),('7798443661218','Smartwatch Boca C8 Max Azul - Único',110000.00,'smartwatch.WEBP',4);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rubros`
--

DROP TABLE IF EXISTS `rubros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rubros` (
  `idrubros` int NOT NULL,
  `descripcion` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`idrubros`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rubros`
--

LOCK TABLES `rubros` WRITE;
/*!40000 ALTER TABLE `rubros` DISABLE KEYS */;
INSERT INTO `rubros` VALUES (1,'camisetas'),(2,'camperas'),(3,'pantalones y shorts'),(4,'articulos');
/*!40000 ALTER TABLE `rubros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-13 15:59:14
