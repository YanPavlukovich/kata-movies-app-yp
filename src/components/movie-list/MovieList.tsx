import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/root-reducers';
import { fetchMoviesApi } from '../../API/api';
import { setSearchQuery } from '../../store/search-slice';

const MoviesList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const movies = useSelector((state: RootState) => state.movies.movies);
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchQuery({ query: searchQuery }));
  };

  useEffect(() => {
    dispatch(fetchMoviesApi(query));
  }, [query, dispatch]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
