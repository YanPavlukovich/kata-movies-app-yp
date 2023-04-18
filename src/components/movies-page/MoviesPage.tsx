import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesApi } from '../../API/api';
import { RootState } from '../../store/root-reducers';
import { setSearchQuery } from '../../store/search-slice';
import { Movie } from '../../models/movie';
import SearchBox from '../search-box/SearchBox';

const MoviesPage: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const searchQuery = useSelector((state: RootState) => state.search.query);

  useEffect(() => {
    dispatch(fetchMoviesApi(searchQuery));
  }, [dispatch, searchQuery]);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <div className="movies-container">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
