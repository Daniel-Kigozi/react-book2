import React from 'react';
import PropTypes, { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/Books/book';

function Book({ item, itemId }) {
  const Dispatch = useDispatch();
  const Booksremove = async () => {
    await Dispatch(deleteBook(itemId)).then(() => {
      Dispatch(fetchBooks());
    });
  };
  return (
    <div className="Book">
      <h3>{ item.author }</h3>
      <h3>{ item.title }</h3>
      <button type="button" onClick={() => Booksremove()}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  itemId: PropTypes.number,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  item: {},
  itemId: number,
};
export default Book;
