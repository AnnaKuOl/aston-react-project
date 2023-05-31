import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from './moviesApi';
import favoriteMoviesReducer from './favoriteMoviesSlice';
import usersReducer from './usersSlice';
import { localStorageMiddlewar } from './middleware/localStorageMiddleware';

export { moviesApi } from './moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    favoriteMovies: favoriteMoviesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([moviesApi.middleware, localStorageMiddlewar]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;