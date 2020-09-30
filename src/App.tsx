import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import './App.scss';
import MovieListTypeContextProvider from './contexts/MovieListTypeContext';
import ListMoviesContextProvider from './contexts/ListMoviesContext';

function App() {
  return (
    <MovieListTypeContextProvider>
      <ListMoviesContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ListMoviesContextProvider>
    </MovieListTypeContextProvider>
  );
}

export default App;
