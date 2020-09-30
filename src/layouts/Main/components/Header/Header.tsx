import React, {
  ChangeEvent,
  FunctionComponent,
  useContext,
  useState
} from 'react';
import {
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
  UPCOMING
} from '../../../../constants/MovieListConstants';
import { MovieListTypeContext } from '../../../../contexts/MovieListTypeContext';

const Header: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { movieTypeOption, pickMovieType } = useContext(MovieListTypeContext);

  const handleOnChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (pickMovieType) {
      pickMovieType(e.target.value);
    }
  };

  return (
    <header className="s-header">
      <section className="s-header__content">
        <div className="s-header__content--title">Movie API</div>
        <input
          className="s-header__content--search"
          type="text"
          placeholder="Search movies"
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChangeSearchValue(e)
          }
        />
        <select
          className="s-header__content--dropdown"
          value={movieTypeOption || NOW_PLAYING}
          onChange={handleSelect}>
          <option value={NOW_PLAYING}>Now playing</option>
          <option value={POPULAR}>Popular</option>
          <option value={TOP_RATED}>Top rated</option>
          <option value={UPCOMING}>Upcoming</option>
        </select>
      </section>
    </header>
  );
};

export default Header;
