import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3">
    <Container>
      <div className="text-center">
        <h2>Locations</h2>
        <h3>Retrieval Offices</h3>
        <Row>
          <Col>
            <h4>Office</h4>
            <p>ICS Admin Office</p>
            <br />
            <p>QLCSS</p>
          </Col>
          <Col>
            <h4>Hours</h4>
            <p>8:00 AM - 4:00 PM</p>
            <p>8:00 AM - 4:00 PM</p>
          </Col>
          <Col>
            <h4>Days</h4>
            <p>Monday - Friday</p>
            <br />
            <p>Monday - Friday</p>
          </Col>
        </Row>
        <h3>Contact</h3>
        <p>Phone: (555) 555-5555</p>
        <p>Email: john@foo.com</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
