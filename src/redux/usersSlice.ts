import { createSlice } from '@reduxjs/toolkit';

interface User{
    login: string;
    email?: string;
    password: string;
    favoriteMovies: Array<string>;
    history: Array<string>;

}
const initialState:User[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
      state.push( 
        {
          login: action.payload.login,
          email: action.payload.email,
          password: action.payload.password,
          favoriteMovies: action.payload.favoriteMovies,
          history: action.payload.history,

        }
      );            
    },
    removeUser(state, action) {
      state.filter(user=> user.email !== action.payload.email);
    }  
  }
});
export const {setUser, removeUser} = usersSlice.actions;
export default usersSlice.reducer;
  