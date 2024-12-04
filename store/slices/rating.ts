import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/store/store";

// Define the state interface
interface RatingsState {
  ratings: string[]; // Array of ratings as strings
}

// Initial state
const initialState: RatingsState = {
  ratings: [
    '4.8', '4.8', '3', '4', '5', '3', '5', '4.8', '2', '3.8', '4', '4.8', '3', '5', '2.8', '4', '4.8', '1.8', '3.8', '5', '3', '2.8', '4.8', '4', '5', '3.8', '4.8', '3', '3.8', '5', '4', '2', '2.8', '5', '4.8', '4.8', '4', '3', '5', '2.8', '3.8','5', '3', '3.8', '4.8', '5', '4', '2.8', '4', '3','5', '4.8',
    '4.8', '3', '4', '5', '3','5', '4.8', '2', '3.8', '4', '4.8', '3', '5', '2.8', '4', '4.8', '1.8', '3.8', '5', '3', '2.8', '4.8', '4', '5', '3.8', '4.8', '3', '3.8', '5', '4', '2', '2.8', '5', '4.8', '4.8', '4', '3', '5', '2.8', '3.8','5', '3', '3.8', '4.8', '5', '4', '2.8', '4', '3','5', '4.8',
    '4.8', '3', '4', '5', '3','5', '4.8', '2', '3.8', '4', '4.8', '3', '5', '2.8', '4', '4.8', '1.8', '3.8', '5',
  ],
};

// Create the slice
const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    // Add a new rating
    addRating(state, action: PayloadAction<string>) {
      const newRating = parseFloat(action.payload);

      // Ensure the new rating is valid (1.0 - 5.0)
      if (newRating >= 1 && newRating <= 5) {
        state.ratings.push(newRating.toFixed(1)); // Convert to one decimal place if needed
      }
    },
    // Reset all ratings
    resetRatings(state) {
      state.ratings = [];
    },
  },
});

// Export actions and reducer
export const { addRating, resetRatings } = ratingsSlice.actions;
export default ratingsSlice.reducer;

