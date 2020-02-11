import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../css/App.css';
import '../css/about.css';

function About() {
  return (
    <div className="about">
      <Container>
        <h1 className="text-left section-title">About</h1>
        <p>I am a web developer who loves bringing designs and ideas to life with a strong attention to detail and pixel-perfect magic.</p>
      </Container>
    </div>
  )
}

export default About;
