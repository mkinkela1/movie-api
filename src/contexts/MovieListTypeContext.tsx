import React, { createContext, useState } from 'react';
import { NOW_PLAYING, LIST } from '../constants/MovieListConstants';

interface MovieListTypeContextProviderProps {
  // eslint-disable-next-line react/no-unused-prop-types
  movieTypeOption?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  pickMovieType?: (option: string) => void;
  children?: any;
}

export const MovieListTypeContext = createContext<
  MovieListTypeContextProviderProps
>({});

const MovieListTypeContextProvider = (
  props: MovieListTypeContextProviderProps
) => {
  const [movieTypeOption, setMovieTypeOption] = useState<string>(
    NOW_PLAYING.toLowerCase()
  );

  const pickMovieType = (option: string) =>
    setMovieTypeOption(LIST.includes(option) ? option : NOW_PLAYING);

  return (
    <MovieListTypeContext.Provider
      value={{
        movieTypeOption,
        pickMovieType
      }}>
      {props.children}
    </MovieListTypeContext.Provider>
  );
};

export default MovieListTypeContextProvider;
