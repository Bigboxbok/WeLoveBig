// controllers/bookController.js
const Book = require('../models/bookModel');

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (error) {
    next({ message: 'Unable to get books', details: error.message }); // ส่ง error ไปที่ middleware
  }
};


const addBook = async (req, res, next) => {
    const validation = Book.validateBookData(req.body);
    if (!validation.valid) {
      return next({ status: 400, message: validation.message });
    }
  
    try {
      const newBook = await Book.addBook(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      next({ message: 'Unable to add book', details: error.message });
    }
  };


const updateBook = async (req, res, next) => {
    const { id } = req.params;
    const validation = Book.validateBookData(req.body);
    if (!validation.valid) {
      return next({ status: 400, message: validation.message });
    }
  
    try {
      const updatedBook = await Book.updateBook(id, req.body);
      if (!updatedBook) {
        return next({ status: 404, message: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (error) {
      next({ message: 'Unable to update book', details: error.message });
    }
  };
  

const deleteBook = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedBook = await Book.deleteBook(id);
      if (!deletedBook) {
        return next({ status: 404, message: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted successfully', bookId: deletedBook.id });
    } catch (error) {
      next({ message: 'Unable to delete book', details: error.message });
    }
};

const searchBooks = async (req, res, next) => {
    const { term } = req.query;
    if (!term || typeof term !== 'string') {
      return next({ status: 400, message: 'Search term is required and must be a string.' });
    }
  
    try {
      const books = await Book.searchBooks(term);
      res.json(books);
    } catch (error) {
      next({ message: 'Unable to search books', details: error.message });
    }
};
  
module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks
};
