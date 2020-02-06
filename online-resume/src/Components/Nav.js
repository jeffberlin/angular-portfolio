import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/App.css';
import '../css/nav.css';

function Navigation() {
  const navStyle = {
    fontSize: 18,
    padding: 15,
    letterSpacing: .5,
    color: '#066684',
  }

  const socialStyle = {
    color: '#066684',
    opacity: .8,
    marginRight: 15,
    fontSize: '18pt'
  }

  return (
    <div className="container">
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand>
            <a href="" target="_blank">
              <i class="fab fa-linkedin-in" style={socialStyle} title="LinkedIn"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-github" style={socialStyle} title="GitHub"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-stack-overflow" style={socialStyle} title="Stack Overflow"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-angellist" style={socialStyle} title="AngelList"></i>
            </a>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={navStyle}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={navStyle}
            >
              About
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={navStyle}
            >
              Education
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={navStyle}
            >
              Experience
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={navStyle}
            >
              Portfolio
            </Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to='/'>
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
      </Link> */}
    </div>
  )
}

export default Navigation;
