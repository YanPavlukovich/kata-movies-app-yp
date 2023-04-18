import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../searchSlice';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';
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
