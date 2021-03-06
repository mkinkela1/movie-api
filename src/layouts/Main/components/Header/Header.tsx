import React, { ChangeEvent, FunctionComponent, useContext } from 'react';
import {
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
  UPCOMING
} from '../../../../constants/MovieListConstants';
import { MovieListTypeContext } from '../../../../contexts/MovieListTypeContext';
import { ListMoviesContext } from '../../../../contexts/ListMoviesContext';

const Header: FunctionComponent = () => {
  const { movieTypeOption, pickMovieType } = useContext(MovieListTypeContext);
  const { query, setQuery } = useContext(ListMoviesContext);

  const handleOnChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (pickMovieType) {
      pickMovieType(e.target.value);
    }
  };

  return (
    <header className="s-header">
      <section className="s-header__content">
        <div className="s-header__content--title">Movie API</div>
        <label aria-label="Search movies">
          <input
            className="s-header__content--search"
            type="text"
            placeholder="Search movies"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeSearchValue(e)
            }
          />
        </label>
        <label aria-label="Dropdown">
          <select
            className="s-header__content--dropdown"
            value={movieTypeOption || NOW_PLAYING}
            onChange={handleSelect}>
            <option value={NOW_PLAYING}>Now playing</option>
            <option value={POPULAR}>Popular</option>
            <option value={TOP_RATED}>Top rated</option>
            <option value={UPCOMING}>Upcoming</option>
          </select>
        </label>
      </section>
    </header>
  );
};

export default Header;
