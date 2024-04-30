// script.js

// Function to handle form submission
document.getElementById('productSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const warehouseCity = document.getElementById('warehouseCity').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const minQuantity = document.getElementById('minQuantity').value;
    const maxQuantity = document.getElementById('maxQuantity').value;

    window.location.href = `search_results.html?productName=${productName}&warehouseCity=${warehouseCity}&minPrice=${minPrice}&maxPrice=${maxPrice}&minQuantity=${minQuantity}&maxQuantity=${maxQuantity}`;
});

document.getElementById('clearButton').addEventListener('click', function() {
    // Clear form fields
    document.getElementById('productName').value = '';
    document.getElementById('warehouseCity').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('minQuantity').value = '';
    document.getElementById('maxQuantity').value = '';
});
