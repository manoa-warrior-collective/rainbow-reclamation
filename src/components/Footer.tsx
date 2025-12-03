import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row>
        <Col md={4}>
          <h3>LOCATIONS</h3>
          <p>
            <strong>ICS Admin Office</strong>
            <br />
            8:00 AM - 4:00 PM
            <br />
            Monday - Friday
          </p>
          <p>
            <strong>QLCSS</strong>
            <br />
            8:00 AM - 4:00 PM
            <br />
            Monday - Friday
          </p>
        </Col>
        <Col md={4}>
          <h3>RETRIEVAL OFFICES</h3>
          <p>
            ICS Admin Office
            <br />
            QLCSS
          </p>
        </Col>
        <Col md={4}>
          <h3>CONTACT</h3>
          <p>
            Phone: (555) 555-5555
            <br />
            Email: john@foo.com
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
