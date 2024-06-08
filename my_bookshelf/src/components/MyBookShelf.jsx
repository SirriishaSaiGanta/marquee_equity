import React, { useEffect, useState } from 'react';
import RemoveCard from './removeCard';

function MyBookShelf() {
     // State to store books from local storage
    const [books, setBooks] = useState([]);

    // Effect to fetch books from local storage when component mounts
    useEffect(() => {
          // Retrieve books from local storage, or initialize an empty array if none exis
        const storedBooks = JSON.parse(localStorage.getItem('bookShelf')) || [];
        setBooks(storedBooks);
    }, []);

    const resetBookShelf = ()=>{
        const b = JSON.parse(localStorage.getItem('bookShelf')) || [];
        if(b){
            localStorage.removeItem('bookShelf');
        }
        setBooks([]);
        
    }
    return (
        <div>
            <div className='myBookShelf-container'>
            <h1 className='myBookShelf'>My BookShelf</h1>
            <button className="card-button" onClick={resetBookShelf}>Reset BookShelf</button>

            </div>
            <div>
            {books.length === 0 ? (
                <p>No Books Added to Shelf</p>
            ) : (
                books.map((book) => (
                <RemoveCard key={book.key} book={book} />
                ))
            )}
            </div>
        </div>
    );
}

export default MyBookShelf;
