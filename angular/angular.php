<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db_host = 'localhost'; // database is installed on php server
$db_user = 'lev'; // name to login to mysql
$db_password = 'southhills#'; // password
$db_name = 'lev'; //name of db
$conn = new mysqli($db_host,$db_user,$db_password,$db_name);
if ($conn->connect_error){
  die("Connection failed: ". $conn->connect_error);
}
$result = $conn->query("SELECT first_name, last_name, city FROM angular_people");

while($rows = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"' . $rows["first_name"] . '",';
    $outp .= '"Last_Name":"' . $rows["last_name"] . '",';
    $outp .= '"City":"' . $rows["city"] . '"}';
}
$outp ='{"records":['.$outp.']}';

echo($outp);
?>
