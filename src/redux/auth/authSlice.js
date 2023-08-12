import { loginUser, logoutUser, registerUser } from './operations';

const { createSlice, isPending, isRejected } = require('@reduxjs/toolkit');

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(isPending(registerUser, loginUser, logoutUser), state => {
        // handlePending(state)
      })
      .addMatcher(isRejected(registerUser, loginUser, logoutUser), state => {
        // handleRejected(state, action);
      }),
});

export const authReducer = authSlice.reducer;
