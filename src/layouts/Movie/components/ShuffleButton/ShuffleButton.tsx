import React, { FunctionComponent, useContext } from 'react';
import ShuffleIcon from '../../../../assets/icons/shuffle_icon_white.png';
import { RouletteModalContext } from '../../../../contexts/RouletteModalContext';

const ShuffleButton: FunctionComponent = () => {
  const { setIsOpen } = useContext(RouletteModalContext);

  return (
    <div className="l-container--lg">
      <div className="l-grid">
        <div className="footer">
          <button
            className="footer__button--roulette"
            type="button"
            onClick={() => (setIsOpen ? setIsOpen(true) : undefined)}>
            <img src={ShuffleIcon} alt="Shuffle icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShuffleButton;
