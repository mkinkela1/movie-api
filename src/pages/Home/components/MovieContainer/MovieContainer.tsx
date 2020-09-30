import React, { FunctionComponent } from 'react';

const MovieContainer: FunctionComponent = (props: any) => {
  return (
    <>
      <div className="l-grid__row l-grid__row-3">
        <div className="c-movie-container">
          <div className="c-movie-container__rate">8.2</div>
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
