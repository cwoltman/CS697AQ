document.addEventListener('DOMContentLoaded', function() {
    // Function to clear form fields
    function clearFormFields() {
        document.getElementById('productName').value = '';
        document.getElementById('warehouseCity').value = '';
        document.getElementById('minPrice').value = '';
        document.getElementById('maxPrice').value = '';
        document.getElementById('minQuantity').value = '';
        document.getElementById('maxQuantity').value = '';
    }

    // Add event listener for clear button
    document.getElementById('clearButton').addEventListener('click', clearFormFields);
});

// Function to navigate back to the product search page
function performAnotherSearch() {
    window.location.href = 'index.php';
}
