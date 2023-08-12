import { loginUser, registerUser } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const authInitialState = {
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {})
      .addCase(loginUser.fulfilled, (state, action) => {}),
});

export const authReducer = authSlice.reducer;
