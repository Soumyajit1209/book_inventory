import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0,8))) 
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
      <div>
        <BookCards books={books} headline="Best Seller Books"/>

      </div>
    </div>
    
  );
};

export default BestSellerBook;