import React, { createContext, useContext, useEffect, useState } from 'react';
import LatestMoviesAPI from '../api/ListMoviesAPI';
import { MovieListTypeContext } from './MovieListTypeContext';
import { NOW_PLAYING } from '../constants/MovieListConstants';
import SearchAPI from '../api/SearchAPI';

interface ListMoviesContextProviderProps {
  listMovies?: any;
  loadMoreMovies?: () => void;
  query?: string;
  setQuery?: any;
  children?: any;
}

export const ListMoviesContext = createContext<ListMoviesContextProviderProps>(
  {}
);

const ListMoviesContextProvider = (props: ListMoviesContextProviderProps) => {
  const [listMovies, setListMovies] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const { movieTypeOption } = useContext(MovieListTypeContext);

  useEffect(() => {
    LatestMoviesAPI.index(NOW_PLAYING.toLowerCase()).then(r => {
      setListMovies(r.data.results);
      setPage(1);
    });
  }, []);

  useEffect(() => {
    if (query) {
      SearchAPI.index(query).then(r => {
        setListMovies(r.data.results);
        setPage(1);
      });
    } else if (movieTypeOption) {
      LatestMoviesAPI.index(movieTypeOption.toLowerCase()).then(r => {
        setListMovies(r.data.results);
        setPage(1);
      });
    }
  }, [movieTypeOption, query]);

  const loadMoreMovies = () => {
    if (query) {
      SearchAPI.index(query, page + 1).then(r => {
        setListMovies((prevState: any) => [...prevState, ...r.data.results]);
        setPage(prevState => prevState + 1);
      });
    } else if (movieTypeOption) {
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
        loadMoreMovies,
        query,
        setQuery
      }}>
      {props.children}
    </ListMoviesContext.Provider>
  );
};

export default ListMoviesContextProvider;
