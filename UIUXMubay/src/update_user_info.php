<?php

// Assuming you have a MySQL database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the address from the POST request
$buyerAddress = json_decode(file_get_contents('php://input'), true)['buyer_address'];

// You may want to perform some validation on the address here

// Update the address in the database
$sql = "UPDATE buyers SET address='$buyerAddress' WHERE id=1"; // Assuming you have a table named 'buyers'
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'Address updated successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to update address']);
}

$conn->close();
?>
