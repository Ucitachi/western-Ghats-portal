import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NatureNavbar from './components/Navbar';
import Hero from './components/Hero';
import Seniors from './components/main';
import Game from './components/Game';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import TigerComponent from './components/tiger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/ad_login';
import AdminLogin from './components/ad_login';
import UserLogin from './components/user_login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
         <Home/>
        }></Route>
        <Route path='/admin' Component={AdminLogin}></Route>
        <Route path='/user' Component={UserLogin}></Route>
      </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
