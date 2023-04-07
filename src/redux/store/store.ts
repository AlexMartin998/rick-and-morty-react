import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { uiSlice } from './ui';
import { rickApi } from './rickApi';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,

    // RTK Query:
    [rickApi.reducerPath]: rickApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
