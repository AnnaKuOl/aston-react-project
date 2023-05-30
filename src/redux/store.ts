import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from './moviesApi';
import moviesReducer from './moviesSlice';
import usersReducer from './usersSlice';

export { moviesApi } from './moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: moviesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;