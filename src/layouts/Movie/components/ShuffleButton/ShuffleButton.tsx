import React, { FunctionComponent } from 'react';
import ShuffleIcon from '../../../../assets/icons/shuffle_icon_white.png';

const ShuffleButton: FunctionComponent = () => {
  return (
    <div className="l-container--lg">
      <div className="l-grid">
        <div className="footer">
          <button className="footer__button--roulette" type="button">
            <img src={ShuffleIcon} alt="Shuffle icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShuffleButton;
