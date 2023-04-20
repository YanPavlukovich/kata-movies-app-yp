import { SortField } from '../../../types/movies';
import { Button, Space } from 'antd';
import { sortMovies } from '../../../store/slices/movies-slice';
import { useAppDispatch } from '../../../hooks/hooks';

type Props = {
  onSort: (sortField: SortField) => void;
};

const MovieListHeader: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const handleSort = (sortField: SortField) => {
    dispatch(sortMovies(sortField));
  };

  return (
    <div className="movie-list__header">
      <Space>
        <Button onClick={() => handleSort('title' as SortField)}>Sort by title</Button>
        <Button onClick={() => handleSort('releaseDate' as SortField)}>Sort by release date</Button>
      </Space>
    </div>
  );
};

export default MovieListHeader;
