import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, selectAllMovies, selectMoviesStatus } from '../store/movies-slice';
// import MovieCard from './MovieCard';

export const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const status = useSelector(selectMoviesStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading movies</div>;
  }

  return (
    <div className="movies-list">
      {/* {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))} */}
    </div>
  );
};
