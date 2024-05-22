import React, { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  },
  {
    id: 2,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
  },
];

const BookList = () => {
  const [authorName, setAuthorName] = useState('');

  const filterdAuthor = books.filter((book) =>
    book.author.toLowerCase().includes(filterdAuthor.toLowerCase())
  );

  const handleFilterAuthor = (event) => {
    setAuthorName(event.target.value);
  };
  return (
    <div>
      <label htmlFor="authorFilter">Enter Author</label>
      <input type="text" id="authorFilter" onChange={handleFilterAuthor} />
    </div>
  );
};

export default BookList;
