import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/movies-slice';
import { AppDispatch, RootState, store } from '../../store/store';
import { MovieList } from '../movie-list/MovieList';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { data, status, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Movies App</h1>
      <MovieList movies={data} />
    </div>
  );
}

export default App;
