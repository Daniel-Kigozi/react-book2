import React from 'react';
import PropTypes from 'prop-types';

function Book({ del, item }) {
  return (
    <div className="Book">
      <h3>{ item.author }</h3>
      <h3>{ item.titleName }</h3>
      <h3>{ item.title }</h3>
      <button type="button" onClick={() => del(item)}>Remove</button>
    </div>
  );
}
Book.propTypes = {
  del: PropTypes.func,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  del: () => {},
  item: {},
};
export default Book;
