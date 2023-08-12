import { createAsyncThunk } from '@reduxjs/toolkit';
import { $phonebookInst } from 'redux/contacts/operations';

export const registerUser = createAsyncThunk(
  'auth/register',
  (user, thunkAPI) => {
    try {
      //
      const data = $phonebookInst.post('users/signup', user);
      console.log(data);
      return data;
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk('auth/login', (user, thunkAPI) => {
  try {
    //
    const data = $phonebookInst.post('users/login', user);
    console.log(data);
    return data;
    //
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
