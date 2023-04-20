import { MovieObject } from '../../types/movies';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getMovies } from '../../API/movies-api';

export type MoviesState = {
  query: string;
  movies: MovieObject[];
  page: number;
  totalPages: number;
  loading: boolean;
};

type SortField = 'title' | 'releaseDate';


const initialState: MoviesState = {
  query: '',
  movies: [],
  page: 1,
  totalPages: 1,
  loading: false,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (action: { query: string; page: number }) => {
  return await getMovies(action.query, action.page);
});

export const sortMovies = createAsyncThunk('movies/sortMovies', async (sortField: SortField, { getState }) => {
  const { movies } = (getState() as { movies: MoviesState }).movies;

  const sortedMovies = [...movies].sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1;
    if (a[sortField] > b[sortField]) return 1;
    return 0;
  });

  return { movies: sortedMovies };
});



export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MoviesState>) => {
      const { movies, loading, totalPages, page, query } = action.payload;

      state.movies = movies;
      state.loading = loading;
      state.totalPages = totalPages;
      state.page = page;
      state.query = query;
    });
    builder.addCase(sortMovies.fulfilled, (state, action: PayloadAction<{ movies: MovieObject[] }>) => {
      state.movies = action.payload.movies;
    });
  },
});

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectTotalPages = (state: RootState) => state.movies.totalPages;
export const selectPage = (state: RootState) => state.movies.page;
export const selectQuery = (state: RootState) => state.movies.query;
export const selectLoading = (state: RootState) => state.movies.loading;

export default movieSlice.reducer;
