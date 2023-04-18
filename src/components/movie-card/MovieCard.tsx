import React from 'react';

import { RootState } from '../../store';
import { selectMovieById } from '../../store/movies-slice';
import { useSelector } from 'react-redux';

type Props = {
  movieId: number;
};

const MovieCard: React.FC<Props> = ({ movieId }) => {
  const movie = useSelector((state: RootState) => selectMovieById(state, movieId));

  if (!movie) {
    return null;
  }

  const { title, poster, releaseYear } = movie;

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <div className="movie-card-body">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-release-year">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
