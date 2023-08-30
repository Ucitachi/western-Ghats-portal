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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './ad_login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>
                            <Navbar />
                <div className='ak'>
                  <TigerComponent/>
                  <Seniors />
                  <Game />
                  <Contact /></div>
          </div>
        }></Route>
        <Route path='/admin' Component={Login}></Route>
      </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
