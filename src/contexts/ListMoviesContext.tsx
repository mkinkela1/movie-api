import React, { createContext, useContext, useEffect, useState } from 'react';
import LatestMoviesAPI from '../api/ListMoviesAPI';
import { MovieListTypeContext } from './MovieListTypeContext';
import { NOW_PLAYING } from '../constants/MovieListConstants';

interface ListMoviesContextProviderProps {
  // eslint-disable-next-line react/no-unused-prop-types
  listMovies?: any;
  children?: any;
}

export const ListMoviesContext = createContext<ListMoviesContextProviderProps>(
  {}
);

const ListMoviesContextProvider = (props: ListMoviesContextProviderProps) => {
  const [listMovies, setListMovies] = useState<any>([]);
  const { movieTypeOption } = useContext(MovieListTypeContext);

  useEffect(() => {
    LatestMoviesAPI.index(NOW_PLAYING.toLowerCase()).then(r =>
      setListMovies(r.data.results)
    );
  }, []);

  useEffect(() => {
    if (movieTypeOption) {
      LatestMoviesAPI.index(movieTypeOption.toLowerCase()).then(r =>
        setListMovies(r.data.results)
      );
    }
  }, [movieTypeOption]);

  return (
    <ListMoviesContext.Provider
      value={{
        listMovies
      }}>
      {props.children}
    </ListMoviesContext.Provider>
  );
};

export default ListMoviesContextProvider;
