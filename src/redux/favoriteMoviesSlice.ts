import { createSlice } from '@reduxjs/toolkit';

import { FavoriteMovies} from '../types/types';
import { LSKey, getDataFromLS } from '../utils/functions';


type FavoriteMoviesState = {
    favoriteMovies: FavoriteMovies[];
    isLoading:boolean;
    error: string;
}

const initialState: FavoriteMoviesState ={
  favoriteMovies: getDataFromLS(LSKey('fav'), '[]'),
  isLoading: false,
  error: '',
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavoriteMovie(state, action){
      state.favoriteMovies.push({...action.payload, isFavorite: true});
    },
    removeFavoriteMovie(state, action){
      state.favoriteMovies = state.favoriteMovies.filter(movie=> movie.id!==action.payload.id);
    },
    clearFavoriteMovies(state) {
      state.favoriteMovies= [];
    },
    addAllFavoriteMovies(state, action){
      state.favoriteMovies.push(...action.payload);
    }
  }
});
export const { addFavoriteMovie, removeFavoriteMovie, clearFavoriteMovies, addAllFavoriteMovies} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
