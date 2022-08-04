
<?php

<!-- Storing the connection to make it reusable in other files -->
function connect(){
    <!-- // connecting to database -->
    $host = 'dragon.ukc.ac.uk';
    $dbname = 'moo40';
    $user = 'moo40';
    $pwd = 'xoca&lm';
    
    try{
        $conn = new PDO("mysql:host=$host; dbname=$dbname", $user, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        if($conn){
            return $conn;
        } else {
            echo 'Failed to connect';
        }
    }catch(PDOException $e){
        echo "Failed to connect, PDOException: " . $e->getMessage();
    }
}

?>