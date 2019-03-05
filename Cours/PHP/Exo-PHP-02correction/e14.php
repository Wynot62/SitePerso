<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
    html{
        font-family: 'Courier New', Courier, monospace;
    }
    </style>
    <title>e14</title>
</head>
<body>
<?php
////////////////////// exo 14
$a = array(
    bindec("101111111"),
    bindec("101100101"),
    bindec("101111111"),
    bindec("101001101"),
    bindec("111111101"),
);
//$a=array(383,357,383,333,509);
for ($i = 0; $i < 5; $i++) {
    for ($j = 8; $j >= 0; $j--) {
        if (($a[$i] & pow(2, $j)) == pow(2, $j)) {
            echo "*";
        } else {
            echo "&nbsp;";
        }
        if ($j % 3 == 0) {
            echo '&nbsp;';
        }
    }
    echo '<br>';
}
echo '<hr>';

////////////////////////////////////////
?>
</body>
</html>