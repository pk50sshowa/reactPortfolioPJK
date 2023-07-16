import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';``

const App = () => {
  return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
  );
};

export default App;