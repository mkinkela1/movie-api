import React, { FunctionComponent } from 'react';
import { ShuffleButton, Header } from './components';

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
    </section>
  );
};

export default Movie;
