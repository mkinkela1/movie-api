import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {
  return (
    <header className="s-header">
      <section className="s-header__content">
        <Link
          className="s-header__content--title"
          to={location => ({ ...location, pathname: '/home/' })}>
          Movie API
        </Link>
      </section>
    </header>
  );
};

export default Header;
