import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './books';
import { addbook, removebook } from '../redux/Books/book';

function Books() {
  const [name, setName] = useState('');
  const [btitle, setTitle] = useState('');
  const books = useSelector((state) => state.books.books);
  const Dispatch = useDispatch();
  const removeBook = (e) => {
    e.preventDefault();
    Dispatch(addbook({ item_id: books.length + 1, author: name, title: btitle }));
  };

  return (
    <div className="book-page">
      <ul>
        <h2>Books List</h2>
        {books.map((item) => (
          <li key={item}><Book item={item} del={(items) => Dispatch(removebook(items))} /></li>
        ))}
      </ul>
      <div>
        <h2>New Book</h2>
        <form action="" className="book-form">
          <input className="entry" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Author" />
          <input className="entry" type="text" onChange={(e) => setName(e.target.value)} placeholder="Title" />
          <input className="submit-btn" type="submit" value="Save Book" onClick={(e) => removeBook(e)} />
        </form>
      </div>
    </div>
  );
}
export default Books;
