import React, { FunctionComponent, useEffect, useState } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import MovieAPI from '../../api/MovieAPI';
import RatingAPI from '../../api/RatingAPI';

interface MovieProps {
  match: {
    params: {
      id: number;
    };
  };
}

const Movie: FunctionComponent<MovieProps> = props => {
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    MovieAPI.index(props.match.params.id).then(r => setMovieDetails(r.data));
    RatingAPI.ratedMovies().then(({ data }) => {
      if (data.results && data.results.length > 0) {
        // eslint-disable-next-line no-shadow
        data.results.forEach((rating: any) => {
          if (rating.id === +props.match.params.id) setRating(rating.rating);
        });
      }
    });
  }, []);

  useEffect(() => {
    MovieAPI.index(props.match.params.id).then(r => setMovieDetails(r.data));
  }, [props.match.params.id]);

  const getPosterImage = (posterImage: string | undefined | null) => {
    if (posterImage)
      return (
        <img
          src={`${process.env.IMAGE_URL_ORIGINAL}${posterImage}`}
          alt="Movie poster"
        />
      );
    return <></>;
  };

  return (
    <div className="l-container--lg">
      <div className="l-grid">
        <div className="l-grid__row l-grid__row-12">
          <div className="c-show-movie">
            <h1 className="c-show-movie__title">
              {`${movieDetails.title} (${movieDetails.release_date?.substr(
                0,
                4
              )})`}
            </h1>
            <figure className="c-show-movie__poster">
              {getPosterImage(movieDetails?.backdrop_path)}
              <figcaption>{movieDetails.overview}</figcaption>
            </figure>
            <div className="c-show-movie__rating">
              <Rater
                total={10}
                rating={rating}
                onRate={data => {
                  RatingAPI.rateMovie(props.match.params.id, data.rating);
                  setRating(data.rating);
                }}
              />
            </div>
            <div className="c-show-movie__row">
              <div className="c-show-movie__row--item">
                <div className="c-show-movie__row--item--caption">Rating:</div>
                <div className="c-show-movie__row--item--data">
                  {movieDetails.vote_average?.toFixed(1)}
                </div>
              </div>
              <div className="c-show-movie__row--item">
                <div className="c-show-movie__row--item--caption">
                  Popularity:
                </div>
                <div className="c-show-movie__row--item--data">
                  {movieDetails.popularity}
                </div>
              </div>
              <div className="c-show-movie__row--item">
                <div className="c-show-movie__row--item--caption">
                  Language:
                </div>
                <div className="c-show-movie__row--item--data">
                  {movieDetails.spoken_languages
                    ?.map((language: any) => language.name)
                    .join(', ')}
                </div>
              </div>
              <div className="c-show-movie__row--item">
                <div className="c-show-movie__row--item--caption">
                  Production companies:
                </div>
                <div className="c-show-movie__row--item--data">
                  {movieDetails.production_companies
                    ?.map((company: any) => company.name)
                    .join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
