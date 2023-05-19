import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import Book from './books';
import { fetchBooks, saveBook } from '../redux/Books/book';

function Books({ statechange }) {
  const [name, setName] = useState('');
  const [btitle, setTitle] = useState('');
  const books = useSelector((state) => state.books.books);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(fetchBooks());
    statechange(false);
  }, [Dispatch, statechange]);
  const save = async (e) => {
    e.preventDefault();
    const data = {
      item_id: Object.keys(books).length + 1,
      title: btitle,
      author: name,
      category: 'Classics',
    };
    await Dispatch(saveBook(data)).then(() => {
      Dispatch(fetchBooks());
    });
  };

  return (
    <div className="book-page">
      <ul className="book-list">
        {Object.keys(books).map((key) => (
          <div key={key} className="maindiv">
            {books[key].map((item) => (
              <div key={key} className="Book-container">
                <li key={key}><Book item={item} itemId={key} /></li>
              </div>
            ))}
          </div>
        ))}
      </ul>
      <div>
        <h2>New Book</h2>
        <div className="form-wrapper">
          <form action="" className="book-form">
            <input className="entry" type="text" onChange={(e) => setName(e.target.value)} placeholder="Book Title" />
            <input className="entryx" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Author" />
            <input className="submit-btn" type="submit" value="ADD BOOK" onClick={(e) => save(e)} />
          </form>
        </div>
      </div>
    </div>
  );
}

Books.propTypes = {
  statechange: PropTypes.func,
};
Books.defaultProps = {
  statechange: func,
};
export default Books;
