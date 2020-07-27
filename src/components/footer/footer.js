import React from 'react';

import Navs from '../navs';
import navsLinks from '../../common/navs-links';

import classes from './footer.module.scss';

const Footer = () => {

  return (
    <footer className={`mt-auto py-3 ${classes.footer}`}>
      <div className="container">
        <ul className="nav">
          <Navs list={navsLinks} />
        </ul>
      </div>
    </footer>
  )
}

export default Footer;