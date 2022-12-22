import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from './example/example.reducer';

export const store = configureStore({
  reducer: {
    exampleReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
