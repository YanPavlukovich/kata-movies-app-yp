import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { MovieObject, SortField } from '../../types/movies';

import './movie-list.scss';

import MovieCard from '../movie-card/MovieCard';
import MovieListHeader from './movie-list-header/MovieLstHeader';
import { Spin } from 'antd';
import { selectLoading, selectMovies, fetchMovies, sortMovies } from '../../store/slices/movies-slice';

const MovieList = () => {
  const dispatch = useAppDispatch();
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

  const handleSort = (sortField: SortField) => {
    dispatch(sortMovies(sortField));
  };

  const movieCards = movies.map((movie: MovieObject) => {
    return <MovieCard {...movie} key={movie.id} />;
  });

  return (
    <div className="movie-list">
      <MovieListHeader onSort={handleSort} />
      {movieCards}
    </div>
  );
};

export default MovieList;
