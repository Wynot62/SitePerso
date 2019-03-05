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
////////////////////// exo 10
for ($i=1; $i <= 7; $i++) { 
   for ($j=1; $j <= 7; $j++) { 
        //echo ($i*$j) .'&nbsp;';
        echo sprintf('%1$02d ',($i*$j))."&nbsp";
   }
   echo '<br>';
}
echo '<hr>';
////////////////////////////////////////
?>
</body>
</html>