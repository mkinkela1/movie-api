import React, { FunctionComponent, useContext } from 'react';
import ShuffleIcon from '../../../../assets/icons/shuffle_icon_white.png';
import { ListMoviesContext } from '../../../../contexts/ListMoviesContext';

const LoadMoreButton: FunctionComponent = () => {
  const { loadMoreMovies } = useContext(ListMoviesContext);

  return (
    <div className="l-container--lg">
      <div className="l-grid">
        <div className="footer">
          <button
            className="footer__button--load"
            type="button"
            onClick={() => (loadMoreMovies ? loadMoreMovies() : undefined)}>
            <div>Load</div>
          </button>
          <button className="footer__button--roulette" type="button">
            <img src={ShuffleIcon} alt="Shuffle icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadMoreButton;
