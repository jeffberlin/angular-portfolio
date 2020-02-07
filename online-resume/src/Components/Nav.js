import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Drawer from '@material-ui/core/Drawer';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/App.css';
import '../css/nav.css';

function Navigation() {
  const navStyle = {
    fontSize: 18,
    padding: 15,
    color: '#066684'
  }

  const socialStyle = {
    opacity: .8,
    marginRight: 15,
    fontSize: '18pt'
  }

  const drawerWidth = 240;

  return (
    <div>
      <Drawer
        
        variant="permanent"
        anchor="right"
      >
      </Drawer>
      {/* <Navbar> */}
        {/* <Container> */}
          {/* <Navbar.Brand>
            <a href="https://www.linkedin.com/in/jeff-berlin/" target="_blank">
              <i className="fab fa-linkedin-in" style={socialStyle} title="LinkedIn"></i>
            </a>
            <a href="https://github.com/jeffberlin" target="_blank">
              <i className="fab fa-github" style={socialStyle} title="GitHub"></i>
            </a>
            <a href="https://stackoverflow.com/users/7426944/jeff-berlin" target="_blank">
              <i className="fab fa-stack-overflow" style={socialStyle} title="Stack Overflow"></i>
            </a>
            <a href="https://angel.co/jeffrey-berlin-1" target="_blank">
              <i className="fab fa-angellist" style={socialStyle} title="AngelList"></i>
            </a>
          </Navbar.Brand> */}
          {/* <Nav className="flex-column">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-90}
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
          </Nav> */}
        {/* </Container> */}
      {/* </Navbar> */}
    </div>
  )
}

export default Navigation;
