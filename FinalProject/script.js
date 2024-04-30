// script.js

// Function to handle form submission
document.getElementById('productSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const productName = document.getElementById('productName').value;

    // Call a function to perform search based on the form data
    performSearch(productName);
});

// Function to perform search and display results
function performSearch(productName) {
    
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = `<p>Search results for: ${productName}</p>`;
}

// Function to clear form fields
document.getElementById('clearButton').addEventListener('click', function() {
    // Clear form fields
    document.getElementById('productName').value = '';
    document.getElementById('warehouseCity').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('minQuantity').value = '';
    document.getElementById('maxQuantity').value = '';
});

// Function to navigate back to the product search page
function performAnotherSearch() {
    window.location.href = 'index.html';
}
