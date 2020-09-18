import React, { useState } from 'react';

import './App.css';

import Search from './components/Search';
import MovieDetails from './components/MovieDetails';

import { SearchContext } from './context/index';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesData, setMovesData] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);
  const [showlist, setShowlist] = useState(false);

  const searchHandler = async (title) => {
    setInputValue(title);
    setShowlist(true);

    const resposnse = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&s=${title}`
    );
    const data = await resposnse.json();

    console.log(data);
    if (data.Response === 'True') {
      setMovesData(data.Search);
    }
  };

  const movieSelectHandler = (movieData) => {
    setSelectMovie(movieData);
    setShowlist(false);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <SearchContext.Provider
        value={{
          inputValue,
          searchHandler,
          moviesData,
          movieSelectHandler,
          selectMovie,
          showlist,
        }}
      >
        <Search />
        {selectMovie && <MovieDetails />}
      </SearchContext.Provider>
    </div>
  );
};

export default App;
