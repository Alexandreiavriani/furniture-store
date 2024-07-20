<?php

$conn=mysqli_connect('localhost','root','','furniro_db') or die('connection failed');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$conn -> set_charset("utf8");


?>