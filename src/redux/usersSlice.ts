import { createSlice } from '@reduxjs/toolkit';

interface User{
    login: string;
    email?: string;
    id: string;
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
          id: action.payload.id,
          password: action.payload.password,
          favoriteMovies: action.payload.favoriteMovies,
          history: action.payload.history,

        }
      );
            
    },
    removeUser(state, action) {
      state.filter(user=> user.id !== action.payload.id);
    }  
  }
});
export const {setUser, removeUser} = usersSlice.actions;
export default usersSlice.reducer;
  