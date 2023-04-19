import { useAppSelector } from '../../hooks/hooks';
import { MovieObject } from '../../types/movies';

import './movie-list.scss';

import MovieCard from '../movie-card/MovieCard';
import { Spin } from 'antd';
import { selectLoading, selectMovies } from '../../store/slices/movies-slice';

const MovieList = () => {
  const loading = useAppSelector(selectLoading);
  const movies = useAppSelector(selectMovies);
  const isEmpty = !movies.length;

  if (loading) {
    return (
      <div className="movie-list_loading">
        <Spin size={'large'} tip="Loading" />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="movie-list_empty">
        <p className={'movie-list__not-found'}>Movies not found</p>
      </div>
    );
  }

  const movieCards = movies.map((movie: MovieObject) => {
    return <MovieCard {...movie} key={movie.id} />;
  });

  return <div className="movie-list">{movieCards}</div>;
};

export default MovieList;
