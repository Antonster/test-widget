import { configureStore } from '@reduxjs/toolkit';

import widgetReducer from './widget/widget.reducer';

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
