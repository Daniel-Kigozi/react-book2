import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: "error" */
const initialState = {
  books: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

export const bookReducer = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addbook: (state, action) => {
      const book = [...state.books, action.payload];
      state.books = book;
    },
    removebook: (state, action) => {
      const book = state.books.filter((item) => item.item_id !== action.payload.item_id);
      state.books = book;
    },
  },
});
export const { addbook, removebook } = bookReducer.actions;
export default bookReducer.reducer;
