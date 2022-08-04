<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, 
Access-Control-Allow-Origin, Content-Type, Access-Control-Allow-Methods, 
Authorization, X-Requested-With');

include 'dbConnect.php';
$conn = connect();

function InsertCust() {
	

	$handle = $conn->prepare(
		"INSERT INTO Customer
		VALUES (" .$firstName. "," .$lastName. "," .$email. "," .$pwd. ");"
	);

	

    if($handle->execute()) {
        return true;
    }
}



// 	if(!($handle->execute(array(
// 		':fnm' => $_POST['playerId'], 
// 		':lnm' => $_POST['dateInput'], 
// 		':eml' => $slotTime, 
// 		':pwd' => $coachId)
// 	)))

// 	return $handle;
// }



?>


