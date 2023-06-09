import { Middleware } from '@reduxjs/toolkit';

import { LSKey, setDataToLS } from '../../utils/functions';
import { RootState } from '../store';

export const localStorageMiddleware: Middleware =
  (state) => (next) => (action) => {
    const store: RootState = state.getState();
    const favorites = store.favoriteMovies.favoriteMovies;
    const history: string[] = state.getState().history.history;
    if (action.type === 'favoriteMovies/addFavoriteMovie') {
      const updateFavorites = [
        ...favorites,
        { ...action.payload, isFavorite: true },
      ];
      setDataToLS(LSKey('fav'), updateFavorites);
    } else if (action.type === 'favoriteMovies/removeFavoriteMovie') {
      const updateFavorites = favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      setDataToLS(LSKey('fav'), updateFavorites);
    }
    if (action.type === 'history/addHistory') {
      if (localStorage.getItem('isAuth')) {
        if (history.includes(action.payload)) {
          const updateHistory = history?.filter(
            (query) => query !== action.payload
          );
          updateHistory?.push(action.payload);
          setDataToLS(LSKey('hist'), updateHistory);
        } else {
          setDataToLS(LSKey('hist'), [...history, action.payload]);
        }
      }
    }

    return next(action);
  };
