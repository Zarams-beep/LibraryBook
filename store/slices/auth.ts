import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: { username: string; email: string } | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'), // Get from localStorage if available
  token: localStorage.getItem('token'), // Get token from localStorage
  isAuthenticated: false, // We'll check if user exists in localStorage
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess(state, action: PayloadAction<{ user: { username: string; email: string }; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(state.user)); // Save to localStorage
      localStorage.setItem('token', state.token); // Save token to localStorage
    },
    loginSuccess(state, action: PayloadAction<{ user: { username: string; email: string }; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(state.user)); // Save to localStorage
      localStorage.setItem('token', state.token); // Save token to localStorage
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('user'); // Remove from localStorage
      localStorage.removeItem('token'); // Remove token from localStorage
    },
  },
});

export const { signupSuccess, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
