import React, {Switch} from 'react';
import './NavigationBar.css'; // Make sure to create this CSS file
import { BrowserRouter,Route} from 'react-router-dom';
import Gallery from './Gallery';

function NatureNavbar() {
  return (
    <nav className="nature-navbar">
      <div className="logo">S24</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NatureNavbar;
