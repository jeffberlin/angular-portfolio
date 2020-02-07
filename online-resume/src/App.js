import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Navigation from './Components/Nav.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Education from './Components/Education.js';
import Experience from './Components/Experience.js';
import Portfolio from './Components/Portfolio.js';
import './css/App.css';

function App() {
  return (
    // <Router>
    //   <Fragment>
        <div className="App">
          <Navigation />
          <Home />
          <About />
          {/* <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/education' component={Education} />
            <Route path='/experience' component={Experience} />
            <Route path='/portfolio' component={Portfolio} /> */}
            {/* <Route component={ErrorPage} /> */}
          {/* </Switch> */}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
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
    //   </Fragment>
    // </Router>
  );
}

export default App;
