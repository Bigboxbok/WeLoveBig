-- สร้างตารางสำหรับข้อมูลหนังสือ
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published_year INT,
    genre VARCHAR(100)
);

-- ใส่ข้อมูลหนังสือ 10 ชุด
INSERT INTO books (title, author, published_year, genre) VALUES
('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction'),
('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'),
('1984', 'George Orwell', 1949, 'Dystopian'),
('Pride and Prejudice', 'Jane Austen', 1813, 'Romance'),
('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction'),
('Moby Dick', 'Herman Melville', 1851, 'Adventure'),
('War and Peace', 'Leo Tolstoy', 1869, 'Historical'),
('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy'),
('Brave New World', 'Aldous Huxley', 1932, 'Dystopian'),
('Ulysses', 'James Joyce', 1922, 'Modernist');
