import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuerySlice } from '../../store/search-slice';
import MovieList from '../movie-list/MovieList';
import SearchBox from '../search-box/SearchBox';
import { fetchMoviesApi } from '../../API/api';
import { Movie } from '../../types/movie';

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (searchQuery: string) => {
    dispatch(setSearchQuerySlice(searchQuery));
    fetchMoviesApi(searchQuery)
      .then((movies: Movie[]) => {
        setMovies(movies);
        setErrorMessage('');
      })
      .catch((error) => {
        setMovies([]);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {errorMessage ? <div className="error">{errorMessage}</div> : <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
