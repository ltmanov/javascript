<?php
require_once 'db.php';
if(isset($_GET['itemID'])){
	$status = $mysqli->real_escape_string($_GET['status']);
	$itemID = $mysqli->real_escape_string($_GET['itemID']);

	$query="UPDATE todo set status='$status' where id='$itemID'";
	$result = $mysqli->query($query);

	$result = $mysqli->affected_rows;

	$json_response = json_encode($result);
}
?>
