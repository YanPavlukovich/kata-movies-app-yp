import { getMovies } from './../API/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './../store';

type Movie = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
}

type MoviesState = {
  loading: boolean;
  error: string | null;
  data: Movie[];
}

const initialState: MoviesState = {
  loading: false,
  error: null,
  data: [],
};

export const selectMovies = (state: RootState) => state.movies.movies;

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchMoviesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions;

export const fetchMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const movies = await getMovies();
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export default moviesSlice.reducer;
