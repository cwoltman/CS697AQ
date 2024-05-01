<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Results</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Search Results</h1>
    <div id="searchResults">
        <?php
        $servername = "localhost";
        $username = "*";
        $password = "*";
        $dbname = "*";

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
                $sql .= " AND pname LIKE '%$productName%'";
            }
        
            if (!empty($_POST['warehouseCity'])) {
                $warehouseCity = $_POST['warehouseCity'];
                $sql .= " AND city LIKE '%$warehouseCity%'";
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
                    echo "Name: " . $row["pname"]. " - City: " . $row["city"]. " - Price: " . $row["price"]. " - Quantity: " . $row["quantity"]. "<br>";
                }
            } else {
                echo "No results found";
            }
        }
        
        // Close connection
        $conn->close();
        ?>
    </div>
    <button onclick="performAnotherSearch()">Perform Another Search</button>

    <script src="script.js"></script>
</body>
</html>
