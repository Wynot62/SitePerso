<?php
////////////////////// exo 11
$b=array('a','b','c','d');
$mycount=count($b);
for ($i=0; $i < $mycount; $i++) { 
    $b[$i] .= $b[$i];
}
var_dump($b);
echo '<hr>';