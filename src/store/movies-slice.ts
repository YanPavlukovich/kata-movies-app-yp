import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMovies } from '../API/api';
import { RootState } from '../app/store';


export type Movie = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
}

export type MoviesState = {
  data: Movie[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: MoviesState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await getMovies();
  return response.data;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const selectAllMovies = (state: RootState) => state.movies.data;

export const selectMovieById = (state: RootState, movieId: number) =>
  state.movies.data.find(movie => movie.id === movieId);

export default moviesSlice.reducer;
