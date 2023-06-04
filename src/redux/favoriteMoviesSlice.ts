import { createSlice } from '@reduxjs/toolkit';

import { FullMovieDataClient} from '../types/types';
import { LSKey } from '../utils/functions';

export interface FavoriteMovies extends FullMovieDataClient{
        isFavorite: boolean;   
  
}
interface FavoriteMoviesState {

    favoriteMovies: FavoriteMovies[];
    isLoading:boolean;
    error: string;
}

const movies = JSON.parse(localStorage.getItem(LSKey('fav')) ?? '[]') ;
console.log('movies: ', movies);

const initialState: FavoriteMoviesState ={
  favoriteMovies: movies ,
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
    }
  }
});
export const { addFavoriteMovie, removeFavoriteMovie, clearFavoriteMovies} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
