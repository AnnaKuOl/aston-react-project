import { Middleware } from '@reduxjs/toolkit';

import { LSKey } from '../../utils/functions';
import { RootState } from '../store';

export const localStorageMiddleware: Middleware =
  (state) => (next) => (action) => {
    const store: RootState = state.getState();
    const favorites = store.favoriteMovies.favoriteMovies;
    const history: string[] = state.getState().history.history;
    if (action.type === 'favoriteMovies/addFavoriteMovie') {
      localStorage.setItem(
        LSKey('fav'),
        JSON.stringify([...favorites, { ...action.payload, isFavorite: true }])
      );
    } else if (action.type === 'favoriteMovies/removeFavoriteMovie') {
      localStorage.setItem(
        LSKey('fav'),
        JSON.stringify(
          favorites.filter((movie) => movie.id !== action.payload.id)
        )
      );
    }
    if (action.type === 'history/addHistory') {
      if (localStorage.getItem('isAuth')) {
        if (history.includes(action.payload)) {
          const updateHistory = history?.filter(
            (query) => query !== action.payload
          );
          updateHistory?.push(action.payload);
          localStorage.setItem(LSKey('hist'), JSON.stringify(updateHistory));
        } else {
          localStorage.setItem(
            LSKey('hist'),
            JSON.stringify([...history, action.payload])
          );
        }
      }
    }

    return next(action);
  };
