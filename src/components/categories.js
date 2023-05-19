import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const Categories = () => {
  const uniqueId = new Date().toISOString();
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  return (
    <div>
      {categories.map((item) => (<div key={uniqueId}>{item}</div>))}
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
