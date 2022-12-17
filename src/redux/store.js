import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice';

const store = configureStore({
  reducer: {
    greet: greetingReducer,
  },
});

export default store;
