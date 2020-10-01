import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  poster_path: string;
  vote_average: number;
}

const MovieContainer: FunctionComponent<Movie> = props => {
  return (
    <>
      <div className="l-grid__row l-grid__row-3">
        <Link
          className="c-movie-container"
          to={location => ({ ...location, pathname: `/movie/${props.id}` })}>
          <div className="c-movie-container__rate">
            {props.vote_average.toFixed(1)}
          </div>
          <img
            src={`${process.env.IMAGE_URL_W500}/${props.poster_path}`}
            className="c-movie-container__poster"
            alt="Movie poster"
          />
        </Link>
      </div>
    </>
  );
};

export default MovieContainer;
