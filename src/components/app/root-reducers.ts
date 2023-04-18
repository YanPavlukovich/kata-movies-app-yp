import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import searchReducer from './searchSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
