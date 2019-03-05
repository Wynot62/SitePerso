<?php
////////////////////// exo 06
$f = basename($_SERVER['PHP_SELF']);
echo 'il y a ' . count(file($f)) . ' lignes dans ' . $f;
echo '<hr>';
