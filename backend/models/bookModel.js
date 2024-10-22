const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'mysecretpassword',
  database: process.env.DB_NAME || 'welovebig'
});


client.connect();

const getAllBooks = async () => {
  const res = await client.query('SELECT * FROM books');
  return res.rows;
};

const addBook = async (book) => {
  const { title, author, published_year, genre } = book;
  const res = await client.query(
    'INSERT INTO books (title, author, published_year, genre) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, author, published_year, genre]
  );
  return res.rows[0];
};

// Update book by ID
const updateBook = async (id, book) => {
  const { title, author, published_year, genre } = book;
  const res = await client.query(
    'UPDATE books SET title = $1, author = $2, published_year = $3, genre = $4 WHERE id = $5 RETURNING *',
    [title, author, published_year, genre, id]
  );
  return res.rows[0];
};

// Delete book by ID
const deleteBook = async (id) => {
  const res = await client.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

const searchBooks = async (searchTerm) => {
    const res = await client.query(
      `SELECT * FROM books WHERE title ILIKE $1 OR author ILIKE $1`,
      [`%${searchTerm}%`] // ใช้ ILIKE สำหรับค้นหาที่ไม่คำนึงถึงตัวพิมพ์เล็กพิมพ์ใหญ่
    );
    return res.rows;
};

const validateBookData = (data) => {
    const { title, author, published_year, genre } = data;
    
    if (!title || typeof title !== 'string') {
      return { valid: false, message: 'Title is required and must be a string.' };
    }
    if (!author || typeof author !== 'string') {
      return { valid: false, message: 'Author is required and must be a string.' };
    }
    if (!published_year || typeof published_year !== 'number') {
      return { valid: false, message: 'Published year is required and must be a number.' };
    }
    if (!genre || typeof genre !== 'string') {
      return { valid: false, message: 'Genre is required and must be a string.' };
    }
    
    return { valid: true };
  };
  
module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
  validateBookData
};