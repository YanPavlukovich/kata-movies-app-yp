import { SortField } from '../types/movies';
import { sortMovies } from '../store/slices/movies-slice';
import { useAppDispatch } from '../hooks/hooks';

export const useSortMovies = () => {
  const dispatch = useAppDispatch();
  const handleSort = (sortField: SortField) => {
    dispatch(sortMovies(sortField));
  };
  return { dispatch, handleSort };
};
