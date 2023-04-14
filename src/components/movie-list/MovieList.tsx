import { Movie } from '../../store/movies-slice';
import { List, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectAllMovies } from '../../store/movies-slice';
import { FC, useEffect } from 'react';

export type Props = {
  movies: Movie[];
};

export const MovieList: FC<Props> = ({ movies }) => {
  const dispatch = useDispatch();
  const allMovies = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={allMovies}
      renderItem={(movie) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={movie.poster} />}
            title={<a href="#">{movie.title}</a>}
            description={movie.releaseYear}
          />
        </List.Item>
      )}
    />
  );
};
