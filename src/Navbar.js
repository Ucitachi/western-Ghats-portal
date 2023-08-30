import React, {Switch} from 'react';
import './NavigationBar.css'; // Make sure to create this CSS file
import {NavLink} from 'react-router-dom';
import Gallery from './Gallery';

function NatureNavbar() {
  return (

      <div>
      <nav className="nature-navbar">
        <div className="logo">S24</div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#">About</a></li>
          <li><NavLink to='/admin'>Admin</NavLink></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      </div>

  );
}

export default NatureNavbar;
