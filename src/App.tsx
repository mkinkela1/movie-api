import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import './App.scss';
import MovieListTypeContextProvider from './contexts/MovieListTypeContext';
import ListMoviesContextProvider from './contexts/ListMoviesContext';
import RouletteModalContextProvider from './contexts/RouletteModalContext';

function App() {
  return (
    <RouletteModalContextProvider>
      <MovieListTypeContextProvider>
        <ListMoviesContextProvider>
          <BrowserRouter forceRefresh>
            <Routes />
          </BrowserRouter>
        </ListMoviesContextProvider>
      </MovieListTypeContextProvider>
    </RouletteModalContextProvider>
  );
}

export default App;
