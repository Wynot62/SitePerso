<?php

$a=$_GET['a'];
$b=$_GET['b'];
$c=$_GET['c'];

$d = $b*$b -4 * $a * $c;
if ($a == 0 ) {
    die("La veleur de 'a' ne doit pas etre nulle .... BYE");
}
if ($d <0) {
    echo "Pas de solutions dans le monde réel !!";
} elseif ($d == 0) {
    echo "On a une solution double : ". -$b/(2*$a);
}else{
    echo "on a deux solutions :<br>";
    echo "x1 = ".((-$b - sqrt($d))/(2*$a)).'<br>';
    echo "x2 = ".((-$b + sqrt($d))/(2*$a)).'<br>';
}

