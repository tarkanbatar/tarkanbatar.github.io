<?php
function OpenConnection($dbhost,$dbuser,$dbpassword,$db,$dbport){

    $host = $dbhost;
    $user = $dbuser;
    $password = $dbpassword;
    $database = $db;
    $port = $dbport;

    $connection = new mysqli($host,$user,$password,$database,$port) or die("Connection failed! %s\n".$connection->error) ;
    return $connection;
}

function CloseConnection($connection){
    $connection -> close();
}

function checkUserId($userID){
    $connection = OpenConnection(); //parametreleri unutma
    if($connection != null){
        $sqlQuery = "BURAYA userID'nin varlığını sorgulayan SQL QUERYSİ GELECEK";
        $result = mysqli_query($connection,$sqlQuery);

        if ($result->num_rows > 0){ // burası doğru olmayabilir
            $insertQuery = "BURAYA INSERT QUERYSI GELECEK";
            mysqli_query($connection,$insertQuery);
        } else {
            print_r("User information received before\n");
        }
    } else {
        print_r("Connection could not established!");
    }
    CloseConnection($connection);
}
?>