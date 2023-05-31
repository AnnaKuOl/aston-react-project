import { Middleware } from '@reduxjs/toolkit';

import { LSKey } from '../../utils/functions';
import { RootState } from '../store';

export const localStorageMiddlewar: Middleware =
  (state) => (next) => (action) => {
    const store: RootState = state.getState();
    const favorites = store.favoriteMovies.favoriteMovies;
    // const history = state.getState().history.history
    if (action.type === 'favoriteMovies/addFavoriteMovie') {
      localStorage.setItem(
        LSKey('fav'),
        JSON.stringify([...favorites, action.payload])
      );
    } else if (action.type === 'favoriteMovies/removeFavoriteMovie') {
      localStorage.setItem(
        LSKey('fav'),
        JSON.stringify(
          favorites.filter((movie) => movie.id !== action.payload.id)
        )
      );
    }
    // if(action.type === 'history/addHistory') {
    //     localStorage.setItem(LSKey('hist'), JSON.stringify([...history, action.payload]))
    // }
    next(action);
  };
