import { createSlice } from '@reduxjs/toolkit';

import { User } from '../types/types';


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
  