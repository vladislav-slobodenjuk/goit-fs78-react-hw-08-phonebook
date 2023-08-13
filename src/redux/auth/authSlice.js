import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';

import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const authInitialState = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
  isLoggedIn: false,
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
  // state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

// const handleFulfilledDefaults = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      //--------- Registration ---------
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      //--------- Login ---------
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      //--------- Logout ---------
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      //--------- Refresh ---------
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addMatcher(
        isPending(registerUser, loginUser, logoutUser, refreshUser),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        isRejected(registerUser, loginUser, logoutUser, refreshUser),
        (state, action) => handleRejected(state, action)
      ),
});

export const authReducer = authSlice.reducer;
