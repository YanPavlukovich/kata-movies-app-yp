import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../searchSlice';
import MoviesList from '../movie-list/MovieList';
import SearchBox from '../search-box/SearchBox';
import { fetchMovies } from '../api/movies';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (searchQuery: string) => {
    dispatch(setSearchQuery(searchQuery));
    fetchMovies(searchQuery)
      .then((movies) => {
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
      <SearchBox handleSubmit={handleSubmit} />
      {errorMessage ? <div className="error">{errorMessage}</div> : <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
