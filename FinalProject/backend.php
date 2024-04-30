<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Prepare SQL statement
    $sql = "SELECT * FROM products WHERE 1=1";

    if (!empty($_POST['productName'])) {
        $productName = $_POST['productName'];
        $sql .= " AND name LIKE '%$productName%'";
    }

    if (!empty($_POST['warehouseCity'])) {
        $warehouseCity = $_POST['warehouseCity'];
        $sql .= " AND warehouse_city LIKE '%$warehouseCity%'";
    }

    if (!empty($_POST['minPrice'])) {
        $minPrice = $_POST['minPrice'];
        $sql .= " AND price >= $minPrice";
    }

    if (!empty($_POST['maxPrice'])) {
        $maxPrice = $_POST['maxPrice'];
        $sql .= " AND price <= $maxPrice";
    }

    if (!empty($_POST['minQuantity'])) {
        $minQuantity = $_POST['minQuantity'];
        $sql .= " AND quantity >= $minQuantity";
    }

    if (!empty($_POST['maxQuantity'])) {
        $maxQuantity = $_POST['maxQuantity'];
        $sql .= " AND quantity <= $maxQuantity";
    }

    // Execute SQL query
    $result = $conn->query($sql);

    // Display search results
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "Name: " . $row["name"]. " - Warehouse City: " . $row["warehouse_city"]. " - Price: " . $row["price"]. " - Quantity: " . $row["quantity"]. "<br>";
        }
    } else {
        echo "No results found";
    }
}

// Close connection
$conn->close();
?>
