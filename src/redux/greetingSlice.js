import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
  loading: false,
  error: '',
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
    builder.addCase(fetchGreeting.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    });

    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.message = action.payload;
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.error = '';
    });

    builder.addCase(fetchGreeting.rejected, (state, action) => {
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.message = '';
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.error = action.error.message;
    });
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
