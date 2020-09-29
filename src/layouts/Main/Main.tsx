import React, { FunctionComponent } from 'react';
import Header from './components/Header';

interface MainProps {
  children?: React.ReactNode;
}

const Main: FunctionComponent<MainProps> = props => {
  const { children } = props;

  return (
    <section className="s-main">
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Main;
