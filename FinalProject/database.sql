CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    warehouse_city VARCHAR(255),
    price DECIMAL(10, 2),
    quantity INT
);

INSERT INTO products (product_name, warehouse_city, price, quantity) VALUES
('Lenovo Laptop', 'New York', 899.99, 750),
('IPhone', 'Los Angeles', 699.99, 12800),
('Android', 'Chicago', 399.99, 15420),
('Air Pods', 'San Francisco', 149.99, 2100),
('Apple Watch', 'Seattle', 249.99, 4300),
('Bluetooth Speaker', 'Miami', 99.99, 900),
('500GB SSD', 'Dallas', 129.99, 500),
('Nintendo Switch', 'Houston', 299.99, 1970),
('Digital Camera', 'Boston', 449.99, 800),
('Portable Power Bank', 'Atlanta', 49.99, 1000);
