import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="./images/brand1.png"
          alt="Farewell Event Logo"
          className="navbar-logo ml-4"
        />
        <span className="font-size ml-3">Farewell Event</span>
      </Navbar.Brand>

      {/* Navbar.Toggle should be within Navbar */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* Navbar.Collapse should be within Navbar */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navlink" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="navlink" href="#seniors">
            Seniors
          </Nav.Link>
          <Nav.Link className="navlink" href="#game">
            Game
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;