import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/App.css';
import '../css/skills.css';

function Skills() {
  const headerStyle = {
    marginBottom: '1rem',
    fontStyle: 'italic',
    color: '#ffffff',
    letterSpacing: .5
  }

  const boxStyle = {
    backgroundColor: '#ffffff',
    width: 150,
    fontSize: '10pt',
    letterSpacing: .5,
    marginBottom: '1rem',
    borderRadius: '.25rem',
    height: '3rem',
    display: 'flex',
    overflow: 'hidden',
    marginRight: '1rem'
  }

  return (
    <Row>
      <Col lg={12}>
        <h4 className="animated fadeIn slow delay-1s" style={headerStyle}>Development</h4>
      </Col>
      <Col lg={12}>
        <ul className="animated fadeIn slow delay-2s">
          <div className="box">
            <li className="box2 text-center" style={{ width: '90%' }}>
              HTML/HTML5
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '93%' }}>
              CSS
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '95%' }}>
              Bootstrap
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '82%' }}>
              JavaScript
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '85%' }}>
              JQuery
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '68%' }}>
              React
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '77%', marginRight: 0 }}>
              AngularJS
            </li>
          </div>
          <div className="box">
            <li className="box2 text-center" style={{ width: '78%' }}>
              WordPress
            </li>
          </div>
        </ul>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '95%' }}
          >
            Bootstrap
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="82"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '82%' }}
          >
            JavaScript
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="77"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '77%' }}
          >
            AngularJS
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '50%' }}
          >
            PHP
          </div>
        </div>
      </Col>
      <Col>

        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="68"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '68%' }}
          >
            React
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="78"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '78%' }}
          >
            WordPress
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '100%' }}
          >
            Responsive Web Design
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <h4 className="animated fadeIn slow delay-1s" style={headerStyle}>Design</h4>
      </Col>
      <Col>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '75%' }}
          >
            Photoshop
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '70%' }}
          >
            InDesign
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '50%' }}
          >
            Sketch
          </div>
        </div>
      </Col>
      <Col>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '65%' }}
          >
            Illustrator
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '80%' }}
          >
            XD
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <h4 className="animated fadeIn slow delay-1s" style={headerStyle}></h4>
      </Col>
    </Row>
  )
}

export default Skills;
