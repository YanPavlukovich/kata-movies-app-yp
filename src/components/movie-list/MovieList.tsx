import { Movie } from '../../store/movies-slice';
import { List, Avatar, Space } from 'antd';
import { useSelector } from 'react-redux';
import { fetchMovies, selectMovies } from '../../store/movies-slice';
import { useEffect } from 'react';

export type Props = {
  movies: Movie[];
};

export const MovieList = () => {
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={movies}
      renderItem={(movie) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={movie.posterUrl} />}
            title={<a href="#">{movie.title}</a>}
            description={movie.year}
          />
        </List.Item>
      )}
    />
  );
};
