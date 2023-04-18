import { Movie } from './../types/movie';
import { getMovies } from './../services/movieService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';



type MoviesState = {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMoviesStart(state) {
      state.status = 'loading';
      state.movies = [];
      state.error = null;
    },
    getMoviesSuccess(state, action: PayloadAction<Movie[]>) {
      state.status = 'succeeded';
      state.movies = action.payload;
    },
    getMoviesFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { getMoviesStart, getMoviesSuccess, getMoviesFailure } = moviesSlice.actions;

export default moviesSlice.reducer;

export const fetchMoviesThunk = (searchQuery: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    const movies = await getMovies(searchQuery);
    dispatch(getMoviesSuccess(movies));
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};
