import React from 'react';
import MovieContainer from './components/MovieContainer';

const Home = () => {
  return (
    <div className="l-container--lg">
      <div className="l-grid">
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
      </div>
    </div>
  );
};

export default Home;
