import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/root-reducers';
import MovieCard from '../movie-card/MovieCard';
import { Movie } from '../../types/movie';

import './MovieList.scss';

type MoviesState = {
  movies?: {
    results: Movie[];
  };
};

const MovieList: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const movies = useSelector((state: RootState) =>
    state.movies?.results?.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="movie-list">
      {movies?.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
