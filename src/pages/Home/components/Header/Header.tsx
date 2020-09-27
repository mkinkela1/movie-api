import React, { ChangeEvent, FunctionComponent, useState } from 'react';

const Header: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

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
        <select className="s-header__content--dropdown">
          <option value="1">Latest</option>
          <option value="2">Now playing</option>
          <option value="3">Popular</option>
          <option value="4">Top rated</option>
          <option value="5">Upcoming</option>
        </select>
      </section>
    </header>
  );
};

export default Header;
