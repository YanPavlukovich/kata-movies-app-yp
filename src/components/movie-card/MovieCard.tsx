import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

type Props = {
  movie: Movie;
};

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img className="card-img-top" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
