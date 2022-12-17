import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const greetingSlice = createSlice({
  name: 'greets',
  initialState,
  reducers: {},
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { x } = greetingSlice.actions;
export default greetingSlice.reducer;
