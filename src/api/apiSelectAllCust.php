
<?php

// Headers
header('Access-Control-Allow-Origin: http://localhost:3007');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Origin, 
Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include 'dbConnect.php';
$conn = connect();

$allCustData = array();
	
// $firstName;
// $lastName;
// $email;
// $pwd;

// 	$handle = $conn->prepare(
// 		"INSERT INTO Customer
// 		VALUES (" .$firstName. "," .$lastName. "," .$email. "," .$pwd. ");"
// 	);

// 	if(!($handle->execute(array(
// 		':fnm' => $_POST['playerId'], 
// 		':lnm' => $_POST['dateInput'], 
// 		':eml' => $slotTime, 
// 		':pwd' => $coachId)
// 	)))

// 	return $handle;
// }

function SelectAllCust () {
	

	$handle = $conn->prepare(
		"SELECT * FROM Customer"
	);

	$handle->execute();

	$result = $handle -> fetchAll();
	if($result){
		return $result;
	} else{
		return false;
	};
}

// SelectAllCust();

?>

            
