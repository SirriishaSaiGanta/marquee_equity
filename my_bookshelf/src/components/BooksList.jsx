import React from 'react';
import Card from './Card.jsx';

const BooksList = ({ books }) => {
  return (
    <div className='books-list'>
      {books.length === 0 ? (
        <p></p>
      ) : (
         // If there are books, map over them and render Card component for each book
        books.map((book) => (
          <Card key={book.key} book={book} />
        ))
      )}
    </div>
  );
};

export default BooksList;