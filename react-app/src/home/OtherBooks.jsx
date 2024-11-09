import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("")//database connect
        .then(res => res.json())
        .then(data => setBooks(data.slice(0,10))) 
    }, []);
  
    return (
      <div>
        {books.map((book) => (
          <div key={book.id}>{book.title}</div>
        ))}
        <div>
         <BookCards books={books} headline="Other Books"/>
  
        </div>
      </div>
      
    );
}

export default OtherBooks
