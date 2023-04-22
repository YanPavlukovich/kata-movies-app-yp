import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { MovieObject } from '../../types/movies';

import './movie-list.scss';

import MovieCard from '../movie-card/MovieCard';
import MovieListHeader from './movie-list-header/MovieLstHeader';
import { Spin } from 'antd';
import { selectLoading, selectMovies, fetchMovies } from '../../store/slices/movies-slice';
import { useSortMovies } from '../../hooks/use-sort-movies';

const MovieList = () => {
  const { dispatch, handleSort } = useSortMovies();
  const loading = useAppSelector(selectLoading);
  const movies = useAppSelector(selectMovies);
  const isEmpty = !movies.length;

  useEffect(() => {
    dispatch(fetchMovies({ query: '', page: 1 }));
  }, [dispatch]);

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

  return (
    <div>
      <MovieListHeader onSort={handleSort} />
      <div className="movie-list">{movieCards}</div>
    </div>
  );
};

export default MovieList;
