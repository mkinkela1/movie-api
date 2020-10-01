import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
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
          <div className="data">
            {`${props.title} (${props.release_date?.substr(0, 4)})`}
            <div className="data__language">
              Language:
              {props.original_language}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieContainer;
