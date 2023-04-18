import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Movie, fetchMovies, selectMovies } from '../../store/movies-slice';
import MovieCard from '../movie-card/MovieCard';
import { RootState } from '../../store';

const MoviesList: React.FC<Movie> = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const status = useSelector((state: RootState) => state.movies.status);

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
      {movies.map((movie) => (
        <MovieCard key={movie.id} movieId={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
