import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import  moviesReducer  from './movies-slice';
import  searchReducer  from './search-slice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
