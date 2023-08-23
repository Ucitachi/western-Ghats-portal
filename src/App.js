import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Seniors from './Seniors';
import Game from './Game';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='ak'>
        <Hero />
        <Seniors />
        <Game />
        <Contact />
      </div>
    </div>
  );
}

export default App;
