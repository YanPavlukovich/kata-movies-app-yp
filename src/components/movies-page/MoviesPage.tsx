import React from 'react';
import { MoviesList } from './MoviesList';

type MoviesPageProps = {
  title: string;
}

export const MoviesPage: React.FC<MoviesPageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <MoviesList />
    </div>
  );
};
