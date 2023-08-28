import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Seniors from './Seniors';
import Game from './Game';
import Contact from './Contact';
import ImageComponent from './tiger';
import Gallery from './Gallery';
import TigerComponent from './tiger';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='ak'>
        <TigerComponent/>
        <Seniors />
        <Game />
        <Contact />
      </div>
    </div>
  );
}

export default App;
