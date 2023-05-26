import { createSlice } from '@reduxjs/toolkit';

const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState: {
        favoriteMovies: [],
    },
    reducers: {
        addFavoriteMovie(state, action){
            state.favoriteMovies.push({...action.payload, isFavotite: true})
        },
        eremoveFavoriteMovie(state, action){},

    }
});
export const { addFavoriteMovie} = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;