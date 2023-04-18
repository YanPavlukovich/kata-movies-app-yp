import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import MovieList from '../movie-list/MovieList';
import { Movie } from '../../types/movie';
import { getMovies } from '../../services/movieService';

const { Content } = Layout;

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  return (
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <h1>Movies</h1>
        <MovieList movies={movies} />
      </div>
    </Content>
  );
};

export default MoviesPage;
