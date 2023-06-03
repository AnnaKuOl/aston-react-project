import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from './moviesApi';
import favoriteMoviesReducer from './favoriteMoviesSlice';
import historyReducer from './historySlice';
import usersReducer from './usersSlice';
import { localStorageMiddleware } from './middleware/localStorageMiddleware';

export { moviesApi } from './moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    favoriteMovies: favoriteMoviesReducer,
    history: historyReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([moviesApi.middleware, localStorageMiddleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;