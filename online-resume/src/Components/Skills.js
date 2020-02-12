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

  return (
    <Row>
      <Col lg={12}>
        <h4 className="animated fadeIn slow delay-1s" style={headerStyle}>Development</h4>
      </Col>
      <Col>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="93"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '93%' }}
          >
            HTML/HTML5
          </div>
        </div>
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
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '75%' }}
          >
            JavaScript
          </div>
        </div>

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
      </Col>
      <Col>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '90%' }}
          >
            CSS
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '60%' }}
          >
            Foundation
          </div>
        </div>
        <div className="progress animated fadeIn slow delay-2s">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: '85%' }}
          >
            JQuery
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Skills;
