import React, { useState, useEffect } from 'react';
import BooksList from './BooksList';

function SearchBooks(props){
    // Destructure props to get the query value
    let q = props.queryValue;

    // State to store fetched books
    const [books, setBooks] = useState([]);

    // Effect to fetch books when the query value changes
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
            const data = await response.json();
            setBooks(data.docs);
        } catch (error) {
            console.error('Error fetching books:', error);
          }
        };

        // Fetch books only if there is a query value
        if(q){
            fetchBooks();
        }
        
      }, [q]);
    
    return(
        <div>
            <BooksList books={books} />
        </div>
        )

}
export default SearchBooks