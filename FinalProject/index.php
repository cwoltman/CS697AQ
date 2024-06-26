<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Search - Woltman's Wares</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Woltman's Wares - Product Search</h1>
        <form id="productSearchForm" action="search_results.php" method="GET">
            <div class="form-group">
                <label for="productName">Product Name (substring)</label>
                <input type="text" id="productName" name="productName">
            </div>
            <div class="form-group">
                <label for="warehouseCity">Warehouse City (substring)</label>
                <input type="text" id="warehouseCity" name="warehouseCity">
            </div>
            <div class="form-group">
                <div class="row">
                    <label for="minPrice">Minimum Price</label>
                    <input type="number" id="minPrice" name="minPrice">
                </div>
                <div class="row">
                    <label for="maxPrice">Maximum Price</label>
                    <input type="number" id="maxPrice" name="maxPrice">
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <label for="minQuantity">Minimum Quantity</label>
                    <input type="number" id="minQuantity" name="minQuantity">
                </div>
                <div class="row">
                    <label for="maxQuantity">Maximum Quantity</label>
                    <input type="number" id="maxQuantity" name="maxQuantity">
                </div>
            </div>
            <br>
            <button type="submit" id="searchButton">Search Products</button>
            <button type="button" id="clearButton">Clear Form</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
