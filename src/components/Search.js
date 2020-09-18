import React, { useContext } from 'react';
import { SearchContext } from '../context/index';
import SearchList from './SearchList';

const Search = () => {
  const { inputValue, searchHandler, showlist } = useContext(SearchContext);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type Move's Name Then Enter"
        value={inputValue}
        onChange={(e) => searchHandler(e.target.value)}
      />
      {inputValue.trim() !== '' && showlist && <SearchList />}
    </div>
  );
};

export default Search;
