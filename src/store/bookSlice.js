import { createSlice } from '@reduxjs/toolkit';

// Initial dummy data
const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      description: "A classic novel of the Jazz Age...",
      rating: 4.5
    },
    {
      id: 2,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "A science fiction masterpiece...",
      rating: 4.8
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description: "A brief history of humankind...",
      rating: 4.7
    }
  ],
  categories: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography", "Fantasy"]
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: state.books.length + 1
      };
      state.books.unshift(newBook); // Add to beginning
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;