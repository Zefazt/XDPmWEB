-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2022 at 02:41 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heavenshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `chitietdonhang`
--

DROP TABLE IF EXISTS `chitietdonhang`;
CREATE TABLE IF NOT EXISTS `chitietdonhang` (
  `Madh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Masp` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Soluong` int(11) NOT NULL,
  `Dongia` int(11) NOT NULL,
  PRIMARY KEY (`Madh`,`Masp`),
  KEY `FK_ctdh_sp` (`Masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`Madh`, `Masp`, `Soluong`, `Dongia`) VALUES
('dh1', 'sp1', 1, 100000);

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

DROP TABLE IF EXISTS `danhmuc`;
CREATE TABLE IF NOT EXISTS `danhmuc` (
  `Madm` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Tendm` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Madm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`Madm`, `Tendm`) VALUES
('dm1', 'Áo phông'),
('dm2', 'Áo thun'),
('dm3', 'Áo tay dài');

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

DROP TABLE IF EXISTS `donhang`;
CREATE TABLE IF NOT EXISTS `donhang` (
  `Madh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Makh` int(11) NOT NULL,
  `Diachi` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `Sdt` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `Ngaylap` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Tongtien` int(11) NOT NULL,
  `Pttt` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Tinhtrang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Madh`),
  KEY `FK_dh_kh` (`Makh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`Madh`, `Makh`, `Diachi`, `Sdt`, `Email`, `Ngaylap`, `Tongtien`, `Pttt`, `Tinhtrang`) VALUES
('dh1', 2, '123 Duong abc', '01234567', 'leanhphi@gmail.com', '2022-03-08', 100000, 'Paypal', 'Dang giao hang');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `Makh` int(11) NOT NULL AUTO_INCREMENT,
  `Tenkh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Sdt` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Diachi` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Makh`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`Makh`, `Tenkh`, `Sdt`, `Diachi`, `Email`, `Password`) VALUES
(1, 'Ngan', '01234567', '123 Duong abc', 'lethikimngan@gmail.com', '123'),
(2, 'Phi', '01234567', '123 Duong abc', 'leanhphi@gmail.com', '123'),
(3, 'Test user', '0924241299', '714/34 Nguyễn Trãi', 'dangkienphong555@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
CREATE TABLE IF NOT EXISTS `nhanvien` (
  `Manv` int(11) NOT NULL AUTO_INCREMENT,
  `Tennv` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Gioitinh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Sdt` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Manv`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`Manv`, `Tennv`, `Gioitinh`, `Sdt`, `Email`, `password`) VALUES
(1, 'Vy', 'Nu', '01234567', 'trankhanhvy123@gmail.com', '123'),
(2, 'Long', 'Nam', '01234567', 'phamtienlong@gmail.com', '123'),
(3, 'Phong', 'Nam', '01234567', 'dangkienphong@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE IF NOT EXISTS `sanpham` (
  `Masp` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Tensp` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `Madm` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Tinhtrang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Namsx` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Hangsx` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Size` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Dongia` int(11) NOT NULL,
  `Soluong` int(11) NOT NULL,
  `hinhanh` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `mota` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Masp`),
  KEY `FK_dm_sp` (`Madm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`Masp`, `Tensp`, `Madm`, `Tinhtrang`, `Namsx`, `Hangsx`, `Size`, `Dongia`, `Soluong`, `hinhanh`, `mota`) VALUES
('sp1', 'aaa', 'dm1', 'Old', '1999', 'YY', 'XL', 100000, 200, '5ff9b120648d8.jpg', 'áo polo cơ bản tiêu chuẩn cho phái nam'),
('sp2', 'Áo hoodie', 'dm2', 'Mới', '2018', 'Hoodie', 'M', 500000, 20, '62208cccc52d7.jpg', 'Áo Hoodie cơ bản dành cho phái nam'),
('sp3', 'Áo phông năng động nhiều họa tiết', 'dm1', 'Còn hàng', '2015', 'Supreme', 'XL', 280000, 24, '61bdc83b9056a.jpg', 'Áo phông mang họa tiết sinh động, phong phú giúp cho người mặc có cảm giác năng động, sôi nổi.'),
('sp4', 'Áo phông COCCACH', 'dm1', 'Còn hàng', '2018', 'Cộc cạch', 'XL', 280000, 24, 'aophongcoccach.jpeg', 'Sau 5 năm, giờ đây COCCACH đã trở thành một hệ thống thời trang unisex đầy cá tính và xây dựng được chất riêng của mình. Phong cách mà chúng tôi hướng tới là sự trẻ trung và phù hợp với xu hướng thời trang hiện đại. Chính phong cách đó đã mang lại sự thành công cho COCCACH. Giờ đây, với 5 cửa hàng ở Hà Nội, COCCACH là một trong những điểm mua sắm của các bạn sinh viên - thanh/ thiếu niên thủ đô trên toàn quốc'),
('sp5', 'Áo phông hoạt hình hổ', 'dm1', 'Còn hàng', '2016', 'LABZAA', 'XXL', 140000, 24, 'aophongconho.png', 'Áo phông đơn giản, phong cách với hình ảnh hổ dễ thương'),
('sp6', 'Áo phông NFIMD', 'dm1', 'Còn hàng', '2017', 'LABZAA', 'XXL', 280000, 28, 'aophongNFIMD.png', 'Áo phông có dòng chữ NFIMD trải dài trên áo. Mang cảm giác trẻ trung, phong cách.');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD CONSTRAINT `FK_ctdh_dh` FOREIGN KEY (`Madh`) REFERENCES `donhang` (`Madh`),
  ADD CONSTRAINT `FK_ctdh_sp` FOREIGN KEY (`Masp`) REFERENCES `sanpham` (`Masp`);

--
-- Constraints for table `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `FK_dh_kh` FOREIGN KEY (`Makh`) REFERENCES `khachhang` (`Makh`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `FK_dm_sp` FOREIGN KEY (`Madm`) REFERENCES `danhmuc` (`Madm`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
