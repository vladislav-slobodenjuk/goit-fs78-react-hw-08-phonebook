import { createAsyncThunk } from '@reduxjs/toolkit';
import { $phonebookInst } from 'redux/contacts/operations';

const setToken = token => {
  $phonebookInst.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  $phonebookInst.defaults.headers.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      //
      const { data } = await $phonebookInst.post('users/signup', user);
      setToken(data.token);

      console.log(data);
      return data;
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      //
      const { data } = await $phonebookInst.post('users/login', user);
      setToken(data.token);

      console.log(data);
      return data;
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      //
      const { data } = await $phonebookInst.post('users/logout');
      clearToken();

      console.log(data);
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
