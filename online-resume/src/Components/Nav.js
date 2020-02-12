import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/App.css';
import '../css/nav.css';

function Navigation() {
  const navStyle = {
    fontSize: 18,
    padding: 15,
    color: '#ffffff',
    letterSpacing: .5
  }

  const socialStyle = {
    opacity: .8,
    fontSize: '18pt',
    color: '#ffffff'
  }

  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>
          <a href="https://www.linkedin.com/in/jeff-berlin/" target="_blank" alt="LinkedIn Profile" rel="noopener noreferrer" title="LinkedIn Profile">
            <i className="fab fa-linkedin-in" style={socialStyle}></i>
          </a>
          <a href="https://github.com/jeffberlin" target="_blank" alt="Github Profile" rel="noopener noreferrer" title="Github Profile">
            <i className="fab fa-github" style={socialStyle}></i>
          </a>
          <a href="https://stackoverflow.com/story/jeff-berlin" target="_blank" alt="Stack Overflow Profile" rel="noopener noreferrer" title="Stack Overflow Profile">
            <i className="fab fa-stack-overflow" style={socialStyle}></i>
          </a>
          <a href="https://angel.co/jeffrey-berlin-1" target="_blank" alt="AngelList Profile" rel="noopener noreferrer" title="AngelList Profile">
            <i className="fab fa-angellist" style={socialStyle}></i>
          </a>
        </Navbar.Brand>
        <Nav>
          <Link
            className="nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-72}
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
            offset={-55}
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
            offset={-55}
            duration={500}
            style={navStyle}
          >
            Experience
          </Link>
          <Link
            className="nav-link nav-link-last"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
            style={navStyle}
          >
            Work
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;
