import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';

const store = configureStore({
  reducer: {
    greet: greetingReducer,
  },
});

export default store;
