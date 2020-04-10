import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/App.css';
import '../css/skills.css';

function Skills() {
  const headerStyle = {
    marginBottom: '1rem',
    fontStyle: 'italic',
    color: '#ffffff',
    letterSpacing: .5,
    textAlign: 'center'
  }

  const otherSkills = [
    "GitHub", "Microsoft 365", "Analytics", "Slack", "Logistics", "Automotive", "SEO"
  ]

  const otherList = otherSkills.map((other) =>
    <li key={other}>{other},&nbsp;</li>
  )

  return (
    <Container>
    <Row>
      <Col lg={12}>
        <h5 className="section-title" style={headerStyle}>Development</h5>
      </Col>
      <Col style={{ marginBottom: '1.5rem' }}>
        {/* <ul className="skills-list">
          {devList}
        </ul> */}
        <h6 className="progress-title">HTML/HTML5</h6>
        <ProgressBar now={94}></ProgressBar>

        <h6 className="progress-title">JavaScript</h6>
        <ProgressBar now={90}></ProgressBar>

        <h6 className="progress-title">JQuery</h6>
        <ProgressBar now={82}></ProgressBar>

        <h6 className="progress-title">AngularJS</h6>
        <ProgressBar now={72}></ProgressBar>

        <h6 className="progress-title">PHP</h6>
        <ProgressBar now={55}></ProgressBar>
      </Col>
      <Col>
        <h6 className="progress-title">CSS</h6>
        <ProgressBar now={93}></ProgressBar>

        <h6 className="progress-title">Bootstrap</h6>
        <ProgressBar now={95}></ProgressBar>

        <h6 className="progress-title">React</h6>
        <ProgressBar now={68}></ProgressBar>

        <h6 className="progress-title">WordPress</h6>
        <ProgressBar now={78}></ProgressBar>

        <h6 className="progress-title">Responsive Web Design</h6>
        <ProgressBar now={100}></ProgressBar>
      </Col>
      <Col lg={12}>
        <h5 className="section-title" style={headerStyle}>Design</h5>
      </Col>
      <Col style={{ marginBottom: '1.5rem' }}>
        <h6 className="progress-title">Photoshop</h6>
        <ProgressBar now={75}></ProgressBar>

        <h6 className="progress-title">Illustrator</h6>
        <ProgressBar now={65}></ProgressBar>

        <h6 className="progress-title">Sketch</h6>
        <ProgressBar now={50}></ProgressBar>
      </Col>
      <Col>
        <h6 className="progress-title">InDesign</h6>
        <ProgressBar now={73}></ProgressBar>

        <h6 className="progress-title">XD</h6>
        <ProgressBar now={80}></ProgressBar>
      </Col>
      <Col lg={12}>
        <h5 className="section-title" style={headerStyle}>Other</h5>
      </Col>
      <Col>
        <ul className="other-skills">
          {otherList}
        </ul>
      </Col>
    </Row>
  </Container>
  )
}

export default Skills;
