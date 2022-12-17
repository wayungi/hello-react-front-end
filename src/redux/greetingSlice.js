/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
  loading: false,
};

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', () => axios.get('http://127.0.0.1:3000/messages', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.data.message));

export const greetingSlice = createSlice({
  name: 'greets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
