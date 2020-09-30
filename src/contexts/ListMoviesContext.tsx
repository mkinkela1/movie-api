import React, { createContext, useContext, useEffect, useState } from 'react';
import LatestMoviesAPI from '../api/ListMoviesAPI';
import { MovieListTypeContext } from './MovieListTypeContext';
import { NOW_PLAYING } from '../constants/MovieListConstants';

interface ListMoviesContextProviderProps {
  // eslint-disable-next-line react/no-unused-prop-types
  listMovies?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  loadMoreMovies?: () => void;
  children?: any;
}

export const ListMoviesContext = createContext<ListMoviesContextProviderProps>(
  {}
);

const ListMoviesContextProvider = (props: ListMoviesContextProviderProps) => {
  const [listMovies, setListMovies] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const { movieTypeOption } = useContext(MovieListTypeContext);

  useEffect(() => {
    LatestMoviesAPI.index(NOW_PLAYING.toLowerCase()).then(r => {
      setListMovies(r.data.results);
      setPage(1);
    });
  }, []);

  useEffect(() => {
    if (movieTypeOption) {
      LatestMoviesAPI.index(movieTypeOption.toLowerCase()).then(r => {
        setListMovies(r.data.results);
        setPage(1);
      });
    }
  }, [movieTypeOption]);

  const loadMoreMovies = () => {
    if (movieTypeOption) {
      LatestMoviesAPI.index(movieTypeOption.toLowerCase(), page + 1).then(r => {
        setListMovies((prevState: any) => [...prevState, ...r.data.results]);
        setPage(prevState => prevState + 1);
      });
    }
  };

  return (
    <ListMoviesContext.Provider
      value={{
        listMovies,
        loadMoreMovies
      }}>
      {props.children}
    </ListMoviesContext.Provider>
  );
};

export default ListMoviesContextProvider;
