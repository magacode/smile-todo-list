import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navs.module.scss';

const Navs = ({ list }) => {
  return list.map(({ id, src, title }) => {
    return (
      <li key={id} className="nav-item">
        <NavLink 
          to={src}
          activeClassName={classes.active}
          className="nav-link"
        >
          {title}
        </NavLink>
      </li>
    )
  })
}

export default Navs;