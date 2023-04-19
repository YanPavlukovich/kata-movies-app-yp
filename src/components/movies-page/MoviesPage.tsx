import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuerySlice } from '../../store/search-slice';
import MovieList from '../movie-list/MovieList';
import SearchBox from '../search-box/SearchBox';

const MoviesPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (searchQuery: string) => {
    dispatch(setSearchQuerySlice(searchQuery));
    setErrorMessage('');
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {errorMessage ? <div className="error">{errorMessage}</div> : <MovieList />}
    </>
  );
};

export default MoviesPage;
