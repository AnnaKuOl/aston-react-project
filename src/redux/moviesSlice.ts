import { createSlice } from '@reduxjs/toolkit';

import { FullMovieDataClient, MovieSearch, ShortMovieDataClient } from '../types/types';

export interface FavoriteMovies extends FullMovieDataClient{
        isFavorite: boolean;      
}
interface FavoriteMoviesState {
    movies: ShortMovieDataClient[] | MovieSearch [];
    favoriteMovies: FavoriteMovies[];
    isLoading:boolean;
    error: string;

}
const initialState: FavoriteMoviesState ={
  favoriteMovies: [],
  movies: [],
  isLoading: false,
  error: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addFavoriteMovie(state, action){
      state.favoriteMovies.push({...action.payload, isFavotite: true});
    },
    addMovies(state, action){
      state.movies.push({...action.payload});
    },
    removeFavoriteMovie(state, action){},

  }
});
export const { addFavoriteMovie, addMovies} = moviesSlice.actions;
export default moviesSlice.reducer;