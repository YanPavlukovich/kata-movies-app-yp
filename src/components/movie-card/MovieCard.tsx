import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import './MovieCard.scss';

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
        <p className="card-text">
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </p>
        <p className="card-text">Release date: {movie.release_date}</p>
        <p className="card-text">Genres: {movie.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
