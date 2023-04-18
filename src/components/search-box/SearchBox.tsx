import React, { useState } from 'react';
import './SearchBox.scss';

type SearchBoxProps = {
  onSubmit: (searchQuery: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
