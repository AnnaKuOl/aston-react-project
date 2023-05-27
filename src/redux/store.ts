import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from './moviesApi';
import favoriteMoviesReducer from './favoriteMoviesSlice';
export { moviesApi } from './moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    favoriteMovies: favoriteMoviesReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;