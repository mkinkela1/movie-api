import React, { FunctionComponent } from 'react';
import { LoadMoreButton, Header } from './components';

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
    </section>
  );
};

export default Main;
