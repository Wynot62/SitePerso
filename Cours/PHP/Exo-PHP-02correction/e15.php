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
    .B{
        background-color:black;
        width: 20px;
        height:20px;
    }
    .W{
        background-color:white;
        width: 20px;
        height:20px;
    }
    </style>
    <title>Document</title>
</head>
<body>
<?php
////////////////////// exo 15
$n = 4;
if (isset($_GET['n'])) {
    $n = $_GET['n'];
}

echo '<table border="1">';
for ($i = 0; $i < 2 * $n; $i++) {
    echo '<tr>';
    for ($j = 0; $j < 2 * $n; $j++) {
        if (($i + $j) % 2 == 0) {
            echo '<td class="B"></td>';
        } else {
            echo '<td class="W"></td>';
        }
    }
    echo '</tr>';
}
echo '</table>';
////////////////////////////////////////
?>
</body>
</html>