import React from 'react';

import Logo from '../logo';
import Navs from '../navs';
import navsLinks from '../../common/navs-links';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Logo />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Navs list={navsLinks} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;