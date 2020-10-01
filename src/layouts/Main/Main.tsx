import React, { FunctionComponent } from 'react';
import { LoadMoreButton, Header } from './components';
import { RouletteModal } from '../../components';

interface MainProps {
  children?: React.ReactNode;
}

const Main: FunctionComponent<MainProps> = props => {
  const { children } = props;

  return (
    <section className="s-main">
      <Header />
      <main>{children}</main>
      <LoadMoreButton />
      <RouletteModal />
    </section>
  );
};

export default Main;
