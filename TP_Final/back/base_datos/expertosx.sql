-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2023 a las 00:16:42
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `expertosx`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Atucha II: la principal central nuclear del país está parada y aún no se sabe cuándo volverá a funcionar', 'En medio de la escasez energética, la usina está en reparaciones y sin actividad desde octubre. Debería proveer el 3% de la energía del tendido eléctrico nacional', 'La central nuclear de Atucha II, la más importante del sistema energético argentino, está parada por una falla técnica que la obligó a frenar su actividad y aún no se sabe cuándo podrá volver a operar. Su aporte al tendido eléctrico nacional ronda el 3% del total y podría costarle al Gobierno cientos de millones de dólares para reemplazar esa fuente de energía durante los meses de mayor demanda.', 'bweckp5mjb1bp6kdjhvu'),
(3, 'Dólar: cómo funciona la maniobra que permite ganar hasta $30.000 por cada USD 1.000', 'La brecha de precios entre la cotización libre y el MEP habilita a una ganancia inmediata de 10% en moneda local', 'El Banco Central trabaja para cumplir con la nueva estrategia que acordó con Economía. Bajar más el tipo de cambio oficial, intervenir en el mercado de dólares alternativos para que no suban y comprar títulos del Tesoro en pesos para que no se derrumben.', 'j9npplrdt9czwsxhooy0'),
(4, 'Dólar: cómo funciona la maniobra que permite ganar hasta $30.000 por cada USD 1.000', 'La brecha de precios entre la cotización libre y el MEP habilita a una ganancia inmediata de 10% en moneda local', 'El Banco Central trabaja para cumplir con la nueva estrategia que acordó con Economía. Bajar más el tipo de cambio oficial, intervenir en el mercado de dólares alternativos para que no suban y comprar títulos del Tesoro en pesos para que no se derrumben.', 'hsgkqkh9uxbczztaxw3x'),
(5, 'El dólar libre marcó un récord, pero la Bolsa porteña sostiene su rally alcista y los ADR en Wall Street treparon hasta 8%', 'La divisa llegó a negociarse a $360 y cerró a 359 pesos. En enero sube 13 pesos o un 3,8 por ciento. El S&P Merval ganó 4,1% y superó los 224.000 puntos por primera vez. El riesgo país quedó debajo de los 2.000 puntos después de siete meses', 'Pasó una rueda financiera en la que fue difícil no sacar rédito, pues se dio en simultáneo una suba de los dólares alernativos, con el libre en zona récord, y un ascenso muy firme para acciones y bonos, tanto en la Bolsa local como en el exterior.', 'vhs6u6shutoqb4imfp3q'),
(6, 'Prueba 1', 'Prueba 1', 'Prueba 1', NULL),
(8, 'Prueba 3', 'Prueba 3', 'Prueba 3', 'jyuptulmcsw9hcetgfsc'),
(9, 'Prueba1', 'Prieba1', 'Prueba1', 'jxq75nijqntlkfgpgwdc');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3'),
(2, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'chicho', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'prueba', 'c893bad68927b457dbed39460e6afd62');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
