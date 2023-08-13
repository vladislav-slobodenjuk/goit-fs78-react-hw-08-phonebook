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
  async (userData, thunkAPI) => {
    try {
      const { data } = await $phonebookInst.post('users/signup', userData);
      setToken(data.token); // !!
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await $phonebookInst.post('users/login', userData);
      setToken(data.token); // !!
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await $phonebookInst.post('users/logout');
      clearToken(); // !!
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token); // !!
      const { data } = await $phonebookInst.get('users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
