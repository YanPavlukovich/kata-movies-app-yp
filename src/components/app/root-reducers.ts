import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from '../..//store/movies-slice'
import searchReducer from '../..//store/search-slice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
