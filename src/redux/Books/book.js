import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/* eslint no-param-reassign: "error" */
const initialState = {
  books: [],
  count: 0,
};

export const fetchBooks = createAsyncThunk(
  'person/fetch', async () => {
    const key = 'xZalG8etSb0nJTXORfm0';
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books`;
    const data = await axios.get(url);
    const json = JSON.stringify(data.data);
    const obj = JSON.parse(json);
    return obj;
  },
);
export const saveBook = createAsyncThunk(
  'person/save', async (bookdata) => {
    const key = 'xZalG8etSb0nJTXORfm0';
    const data = {
      item_id: bookdata.item_id,
      title: bookdata.title,
      author: bookdata.author,
      category: bookdata.category,
    };
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books`;
    let response = await axios.post(url, data);
    response = await response.json();
    fetchBooks();
    return response;
  },
);
export const deleteBook = createAsyncThunk(
  'person/delete', async (id) => {
    const key = 'xZalG8etSb0nJTXORfm0';
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books/${id}`;
    await axios.delete(url);
    const propid = id;
    return { id: propid };
  },
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const results = action.payload;
      state.books = results || [];
    });
  },
});

export const { addbook, removebook } = bookReducer.actions;
export default bookReducer.reducer;
