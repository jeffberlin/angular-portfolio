import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/App.css';

function Nav() {
  return (
    <div className="container">
      <Link to='/'>
        <button type="button">Home</button>
      </Link>
      <Link to='/about'>
        <button type="button">About</button>
      </Link>
      <Link to='/education'>
        <button type="button">Education</button>
      </Link>
      <Link to='/experience'>
        <button type="button">Experience</button>
      </Link>
      <Link to='/portfolio'>
        <button type="button">Portfolio</button>
      </Link>
    </div>
  )
}

export default Nav;
