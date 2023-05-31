import { createSlice } from '@reduxjs/toolkit';

import { FullMovieDataClient} from '../types/types';


export interface FavoriteMovies extends FullMovieDataClient{
        isFavorite: boolean;   
        user: string   
}
interface FavoriteMoviesState {

    favoriteMovies: FavoriteMovies[];
    isLoading:boolean;
    error: string;

}


const initialState: FavoriteMoviesState ={
  favoriteMovies: [],
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