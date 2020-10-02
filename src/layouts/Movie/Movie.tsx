import React, { FunctionComponent } from 'react';
import { ShuffleButton, Header } from './components';
import { RouletteModal } from '../../components';

interface MainProps {
  children?: React.ReactNode;
}

const Movie: FunctionComponent<MainProps> = props => {
  const { children } = props;

  return (
    <section className="s-main">
      <Header />
      <main>{children}</main>
      <ShuffleButton />
      <RouletteModal />
    </section>
  );
};

export default Movie;
