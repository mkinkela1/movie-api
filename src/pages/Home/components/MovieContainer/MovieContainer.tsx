import React, { FunctionComponent } from 'react';

interface Movie {
  poster_path: string;
  vote_average: number;
}

const MovieContainer: FunctionComponent<Movie> = props => {
  return (
    <>
      <div className="l-grid__row l-grid__row-3">
        <div className="c-movie-container">
          <div className="c-movie-container__rate">
            {props.vote_average.toFixed(1)}
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
            className="c-movie-container__poster"
            alt="Endgame poster"
          />
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
