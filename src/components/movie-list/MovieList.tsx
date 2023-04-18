import React from 'react';
import { Movie } from '../../types/movie';
import MovieListItem from '../movie-list-item/MovieListItem';

type MovieListProps = {
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieListItem movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
