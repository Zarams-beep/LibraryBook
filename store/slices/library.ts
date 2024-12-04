// slices/librarySlice.ts
import library from '@/utils/library.json';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a Book object
interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: string | number;
  genre: string[];
  description: string;
  cover_image: string;
}

// Define the initial state structure
interface LibraryState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: LibraryState = {
  books: [],
  status: 'idle',
  error: null,
};

// Simulated async action to fetch books
export const fetchBooks = createAsyncThunk('library/fetchBooks', async () => {
  // Returning the library data from the imported JSON
  return new Promise<Book[]>((resolve) =>
    setTimeout(() => resolve(library), 1000) // Simulate async fetch with a timeout
  );
});

// Create the library slice
const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    updateBook(state, action: PayloadAction<Book>) {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook(state, action: PayloadAction<number>) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});

// Export the actions
export const { setBooks, addBook, updateBook, deleteBook } = librarySlice.actions;

// Export the reducer
export default librarySlice.reducer;
