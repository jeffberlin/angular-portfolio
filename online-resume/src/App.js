import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Route,
//   Link
// } from 'react-router-dom';
// import PropTypes from 'prop-types';
import logo from './logo.svg';
import Navigation from './Components/Nav.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Education from './Components/Education.js';
// import Experience from './Components/Experience.js';
// import Portfolio from './Components/Portfolio.js';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Education />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
