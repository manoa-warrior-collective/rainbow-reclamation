import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// temporary skeleton for about us page

const About = () => (
  <main>
    <Container
      id="about-page"
      fluid
      className="d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: '80vh' }}
    >
      <div>
        <h1>About Us</h1>
        <h2>Locations</h2>
        <h3>Retrieval Offices</h3>
        <Row>
          <Col>
            <h4>Office</h4>
            <p>
              ICS Admin Office
            </p>
            <br />
            <p>
              QLCSS
            </p>
          </Col>
          <Col>
            <h4>Hours</h4>
            <p>
              8:00 AM - 4:00 PM
            </p>
            <p>
              8:00 AM - 4:00 PM
            </p>
          </Col>
          <Col>
            <h4> Days </h4>
            <p> Monday - Friday </p>
            <br />
            <p> Monday - Friday </p>
          </Col>
        </Row>
        <h3> Contact </h3>
        <p> Phone: (555) 555-5555 </p>
        <p> Email: john@foo.com </p>
      </div>
    </Container>
  </main>
);

export default About;
