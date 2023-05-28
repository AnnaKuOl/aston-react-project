import { createSlice } from '@reduxjs/toolkit';

import { FullMovieDataClient } from '../types/types';

export interface FavoriteMovies extends FullMovieDataClient{
        isFavorite: boolean;      
}
interface FavoriteMoviesState {
    favoriteMovies: FavoriteMovies[];
    isLoading:boolean;
    error: string

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
      state.favoriteMovies.push({...action.payload, isFavotite: true});
    },
    removeFavoriteMovie(state, action){},

  }
});
export const { addFavoriteMovie} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;