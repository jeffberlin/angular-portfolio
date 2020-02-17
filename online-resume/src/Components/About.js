import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skills from './Skills.js';
import '../css/App.css';
import '../css/about.css';

function About() {
  return (
    <div className="about">
      <Container style={{ backgroundColor: '#ffffff' }}>
        <h1 className="text-left section-title">About</h1>
        <p>I am a web developer for BMT Micro, Inc. in Wilmington, North Carolina who loves bringing designs and ideas to life with a strong attention to detail and pixel-perfect magic. While taking classes in graphic design, my focus shifted to programming after completing Udacity's Front End Web Developer Nanodegree course. Since completing the Front End Nanodegree, I have also gone on to complete the React/Redux/React-Native Nanodegree course through Udacity.</p>
        <p>My first role as a developer started with a former mobile app start-up, JOMO. </p>
        <Row>
          <Col>
            <Skills />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
