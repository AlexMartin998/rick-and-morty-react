import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { uiSlice } from './ui';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
