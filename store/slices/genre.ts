import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/store/store";

// Initial state
interface AllGenresState {
  genres: string[];
}

const initialState: AllGenresState = {
  genres: [
    'Fiction', 'Classic', 'Dystopian', 'Science Fiction', 'Romance', 'Adventure', 'Fantasy', 'Coming-of-age',
    'Magical Realism', 'Literary Fiction', 'Historical Fiction', 'Epic', 'Mythology', 'Poetry', 'Philosophical Fiction',
    'Psychological Fiction', 'Gothic', 'Satire', 'Children\'s Literature', 'War', 'Social Commentary', 'Feminist Fiction',
    'Mystery', 'Absurdist Fiction', 'Existential', 'Drama', 'Horror', 'Post-Apocalyptic', 'Nature', 'Historical'
  ],
};

// Redux slice
const allGenresSlice = createSlice({
  name: 'allGenres',
  initialState,
  reducers: {
    addGenre(state, action: PayloadAction<string>) {
      state.genres.push(action.payload); // Add a new genre
    },
    removeGenre(state, action: PayloadAction<string>) {
      state.genres = state.genres.filter(genre => genre !== action.payload); // Remove a genre
    },
    resetGenres(state) {
      state.genres = []; // Clear all genres
    },
  },
});

// Export actions and reducer
export const { addGenre, removeGenre, resetGenres } = allGenresSlice.actions;
export default allGenresSlice.reducer;

