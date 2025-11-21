import { Col, Container, Row } from 'react-bootstrap';

/** Render a list of stuff for the logged in user. */
const RecoveryPage = async () => (
  <main>
    <Container id="recovery" fluid className="py-3">
      <Row>
        <Col>
          <h1>How to Recover a Lost Item</h1>
        </Col>
      </Row>
    </Container>
  </main>
);

export default RecoveryPage;
