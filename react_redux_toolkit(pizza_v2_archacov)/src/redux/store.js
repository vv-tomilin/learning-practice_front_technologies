import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const storeConfigOptions = {
  reducer: { counter: counterReducer },
};

export const store = configureStore(storeConfigOptions);

console.log(store);
