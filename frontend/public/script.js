// This script fetches the books from the backend and displays them

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');

    // Fetch books from backend API
    fetch('http://localhost:3000/api/books')  // แก้ไข URL ที่นี่
        .then(response => response.json())
        .then(books => {
            books.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');

                bookItem.innerHTML = `
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">By ${book.author}</div>
                    <div class="book-info">Published Year: ${book.published_year}</div>
                    <div class="book-info">Genre: ${book.genre}</div>
                `;

                bookList.appendChild(bookItem);
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            bookList.innerHTML = '<p>Failed to load books. Please try again later.</p>';
        });
});
