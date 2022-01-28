import { NavLink } from 'react-router-dom';

import React from 'react';

function NavBar() {
  return <header className='header'>
      <nav className='Nav'> 
        <p className='big-text'>Mountains to Molehills</p>
        <NavLink className='navbar-link-text' to="/">Home</NavLink>
        <NavLink className='navbar-link-text' to="/projects">Projects</NavLink>
      </nav>
    </header>;
}

export default NavBar;
