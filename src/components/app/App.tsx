import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies } from '../../store/movies-slice';
import { MovieList } from '../movie-list/MovieList';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Movies App</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
