import { createSlice } from '@reduxjs/toolkit';

import { FullMovieDataClient} from '../types/types';

export interface FavoriteMovies extends FullMovieDataClient{
        isFavorite: boolean;   
  
}
interface FavoriteMoviesState {

    favoriteMovies: FavoriteMovies[];
    isLoading:boolean;
    error: string;
}

const userLS = localStorage.getItem('isAuth') ?? '';
const movies = JSON.parse(localStorage.getItem(`${userLS} fav`) ?? '[]') ;

const initialState: FavoriteMoviesState ={
  favoriteMovies:  movies ?? [],
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
  }
});
export const { addFavoriteMovie, removeFavoriteMovie} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
