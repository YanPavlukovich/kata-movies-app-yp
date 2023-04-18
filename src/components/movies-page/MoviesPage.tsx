import React from 'react';
import MoviesList from '../movie-list/MovieList';
import { Movie } from '../../store/movies-slice';

export type MoviesPageProps = {
  title: string;
  movies: Movie[];
};

export const MoviesPage: React.FC<MoviesPageProps> = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
