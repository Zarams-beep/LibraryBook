import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial state
interface RatingAmountState {
  ratingAmounts: string[];
}

const initialState: RatingAmountState = {
  ratingAmounts: [
    '480', '480', '30', '40', '55', '35', '52', '48', '200', '380', '54', '478', 
    '63', '520', '284', '421', '48', '180', '348', '51', '63', '28', '408', '49', 
    '521', '328', '48', '38', '381', '59', '421', '220', '258', '25', '248', '48', 
    '421', '33', '55', '28', '380', '52', '376', '308', '448', '50', '490', '28', 
    '41', '30', '125', '480', '480', '30', '40', '55', '35', '52', '48', '200', 
    '380', '54', '478', '63', '520', '284', '421', '48', '180', '348', '51', '63', 
    '28', '408', '49', '521', '328', '48', '38', '381', '59', '421', '220', '258', 
    '25', '248', '48', '421', '33', '55', '28', '380', '52', '376', '308', '448', 
    '50', '490', '28', '41', '30', '125', '480', '480', '30', '40', '55', '35', 
    '52', '48', '200', '380', '54', '478', '63', '520', '284', '421', '48', '180', 
    '348', '51', '63', '28', '408', '49', '521', '328', '48', '38', '381', '59', 
    '421', '220', '258', '25', '248', '48', '421', '33', '55', '28', '380', '52', 
    '376', '308', '448', '50', '490', '28', '41', '30', '125',
  ],
};

// Redux slice
const ratingAmountSlice = createSlice({
  name: 'ratingAmounts',
  initialState,
  reducers: {
    addRatingAmount(state, action: PayloadAction<string>) {
      state.ratingAmounts.push(action.payload); // Add a new rating amount
    },
    resetRatingAmounts(state) {
      state.ratingAmounts = []; // Clear all rating amounts
    },
  },
});

// Export actions and reducer
export const { addRatingAmount, resetRatingAmounts } = ratingAmountSlice.actions;
export default ratingAmountSlice.reducer;
