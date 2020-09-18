import React, { useContext } from 'react';

import { SearchContext } from '../context';

const SearchList = () => {
  const { moviesData, movieSelectHandler } = useContext(SearchContext);

  return (
    <ul className="searchlist">
      {moviesData.map((movie, i) => (
        <li key={i} onClick={() => movieSelectHandler(movie)}>
          <img src={movie.Poster} alt="Movie Name" />
          <h3>{movie.Title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
