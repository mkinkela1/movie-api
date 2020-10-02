import React, { useContext, useEffect } from 'react';
import MovieContainer from './components/MovieContainer';
import { ListMoviesContext } from '../../contexts/ListMoviesContext';

const Home = () => {
  const { listMovies } = useContext(ListMoviesContext);

  return (
    <div className="l-container--lg">
      <div className="l-grid">
        <div className="l-grid__row l-grid__row-12">
          <section className="s-movies">
            {listMovies &&
              listMovies.length > 0 &&
              listMovies.map((latestMovie: any, idx: number) => (
                <MovieContainer {...latestMovie} key={idx} />
              ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
