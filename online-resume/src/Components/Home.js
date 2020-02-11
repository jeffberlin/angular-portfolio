import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/App.css';
import '../css/home.css';

function Home() {
  const fontAwesome = {
    color: '#ffffff',
    opacity: '.6',
    marginRight: '.5rem',
  }
  return (
    <div className="home">
      <Container>
        <Row>
          <Col
            lg={4}
            className="text-right"
          >
            <Image
              className="animated fadeInLeft slow"
              src="./images/headshot-min.jpg"
              height={220}
              width={220}
              thumbnail
            />
          </Col>
          <Col
            lg={8}
            className="animated fadeInRight slow"
          >
            <div style={{ borderBottom: '1px solid #ffffff', marginBottom: '1rem' }}>
              <h1 className="animated fadeIn slow delay-1s">Jeff Berlin</h1>
              <p
                className="animated fadeIn slow delay-2s"
                style={{ color: '#ffffff', fontSize: '1.2rem', }}
              >
                Front End Web Developer
              </p>
            </div>
            <ul className="contact-info" style={{ marginBottom: 0 }}>
              <li className="email">
                <a href="mailto:jeff@jbrally.com" alt="email" title="E-mail me">
                  <span>
                    <i className="fas fa-envelope" style={fontAwesome}></i>
                  </span>
                  jeff@jbrally.com
                </a>
              </li>
              <li className="phone">
                <a href="tel:1-302-463-5129" alt="Phone number" title="Call me">
                  <span>
                    <i className="fa fa-phone-alt" style={fontAwesome}></i>
                  </span>
                  302-463-5129
                </a>
              </li>
              <li className="location">
                <a href="https://www.google.com/maps/place/Wilmington,+NC/@34.2068977,-78.1523955,119498m/data=!3m1!1e3!4m5!3m4!1s0x89a9f5a20debaed5:0x5e66493884093032!8m2!3d34.2103894!4d-77.8868117?hl=en" target="_blank" rel="noopener noreferrer" title="View on a map">
                  <span>
                    <i className="fas fa-map-marker-alt" style={fontAwesome}></i>
                  </span>
                  Wilmington, NC
                </a>
              </li>
            </ul>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Home;
