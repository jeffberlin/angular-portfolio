import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import About from './About.js';
import Education from './Education.js';
import Experience from './Experience.js';
import Portfolio from './Portfolio.js';
import '../css/App.css';
import '../css/home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Jeff Berlin's Portfolio</h1>
    </div>
  )
}

export default Home;
