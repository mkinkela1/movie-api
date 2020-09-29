import React, { FunctionComponent } from 'react';

const MovieContainer: FunctionComponent = () => {
  return (
    <>
      <div className="l-grid__row l-grid__row-3">
        <div className="c-movie-container">
          <div className="c-movie-container__rate">8.2</div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY879_.jpg"
            className="c-movie-container__poster"
            alt="Endgame poster"
          />
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
