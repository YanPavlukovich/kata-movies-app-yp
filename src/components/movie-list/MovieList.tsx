import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { MovieObject, SortField } from '../../types/movies';
import { Button, Space } from 'antd';

import './movie-list.scss';

import MovieCard from '../movie-card/MovieCard';
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
      <div className="movie-list__header">
        <Space>
          <Button type="text" onClick={() => handleSort('title' as SortField)}>
            Sort by title
          </Button>
          <Button type="text" onClick={() => handleSort('releaseDate' as SortField)}>
            Sort by release date
          </Button>
        </Space>
      </div>
      {movieCards}
    </div>
  );
};

export default MovieList;
