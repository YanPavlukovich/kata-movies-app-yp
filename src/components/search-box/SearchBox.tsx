import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../store/search-slice';
import { RootState } from '../../store/root-reducers';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="search-box">
      <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchInputChange} />
    </div>
  );
};

export default SearchBox;
