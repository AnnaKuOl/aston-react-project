import { createSlice } from '@reduxjs/toolkit';

import { LSKey } from '../utils/functions';

type HistoryState={
  history: string[],
}
const initialState: HistoryState = {
  history:  JSON.parse(localStorage.getItem(LSKey('hist')) ?? '[]') 
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory(state, action){
      if(!state.history.includes(action.payload)){
        state.history.push(action.payload);
      }
    },
    clearHistory(state){
      state.history = [];
    },
    addAllHistory(state, action){
      state.history.push(...action.payload);
    }
  }
});
export const { addHistory, clearHistory, addAllHistory } = historySlice.actions;
export default historySlice.reducer;