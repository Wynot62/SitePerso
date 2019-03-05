<?php
////////////////////// exo 13
$n = 5;
if (isset($_GET['n'])) {
    $n = $_GET['n'];
}
for ($i = 1; $i <= $n; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "*&nbsp;";
    }
    echo '<br>';
}
echo '<hr>';
