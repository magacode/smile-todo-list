import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import classes from './logo.module.scss';

const Logo = () => {
    return (
        <Link to="/app/" className="navbar-brand">
            <img 
                src={logo} 
                width="40"
                height="35"
                className="d-inline-block align-top"
                alt="SmileTodoApp"
                loading="lazy"
            />
            <span className={`pl-1 font-weight-bold ${classes.title}`}>SmileTodoApp</span>
        </Link>
    );
}

export default Logo;