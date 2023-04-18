import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/root-reducers';
import { fetchMoviesApi } from '../../API/api';
import { Movie } from '../../types/movie';
import './MovieList.scss';

type Props = {
  movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMoviesApi(query).then((movies) => {
      dispatch({ type: 'movies/setMovies', payload: movies });
    });
  }, [query, dispatch]);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
