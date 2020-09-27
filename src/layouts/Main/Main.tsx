import React, { FunctionComponent } from 'react';

interface MainProps {
  children?: React.ReactNode;
}

const Main: FunctionComponent<MainProps> = props => {
  const { children } = props;

  return <main>{children}</main>;
};

export default Main;
