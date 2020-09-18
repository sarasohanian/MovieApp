import React, { useContext } from 'react';

import { SearchContext } from '../context';

const MovieDetails = () => {
  const { selectMovie } = useContext(SearchContext);

  return (
    <div className="movedetails">
      <div className="movedetails-inner">
        <img src={selectMovie.Poster} alt="Movie Name" />
        <h3>
          Name : <span> {selectMovie.Title} </span>
        </h3>
        <h3>
          Year : <span> {selectMovie.Year} </span>
        </h3>
        <h3>
          Type : <span> {selectMovie.Type} </span>
        </h3>
      </div>
    </div>
  );
};

export default MovieDetails;
