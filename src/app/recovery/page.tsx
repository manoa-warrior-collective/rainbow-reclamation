/* eslint-disable react/jsx-one-expression-per-line */
import { Col, Container, Row, Card } from 'react-bootstrap';

/** Render instructions for recovering a lost item */
const RecoveryPage = async () => (
  <main>
    <Container id="recovery" className="py-4 mt-4">
      <Row className="mb-4">
        <Col>
          <h1>How to Recover Your Lost Item</h1>
          <p className="lead">Follow these steps to claim your item from our Lost & Found offices.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <h3 className="mb-3">📋 Step-by-Step Recovery Process</h3>

              <div className="mb-4">
                <h5>1. Verify Your Identity</h5>
                <p>
                  Bring a valid photo ID (UH Student ID, Driver&apos;s License, or State ID) to prove your identity.
                </p>
              </div>

              <div className="mb-4">
                <h5>2. Provide Proof of Ownership</h5>
                <p>Be prepared to describe your item in detail, including:</p>
                <ul>
                  <li>Unique identifying features or markings</li>
                  <li>Contents (for bags, wallets, etc.)</li>
                  <li>Serial numbers or model information (for electronics)</li>
                  <li>Photos of the item if available</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5>3. Visit During Office Hours</h5>
                <p>Come to one of our retrieval offices during operating hours (Monday-Friday, 8:00 AM - 4:00 PM).</p>
              </div>

              <div className="mb-4">
                <h5>4. Sign Retrieval Form</h5>
                <p>Complete and sign the item retrieval form acknowledging receipt of your property.</p>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 className="mb-3">⚠️ Important Notes</h3>
              <ul>
                <li>Items are held for 30 days before being donated or disposed of</li>
                <li>High-value items (electronics, jewelry) require additional verification</li>
                <li>If someone else is picking up your item, they must have written authorization from you</li>
                <li>Perishable items are held for 48 hours only</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <h4>📍 Retrieval Locations</h4>
              <hr />
              <div className="mb-3">
                <h5>ICS Admin Office</h5>
                <p className="mb-1">Monday - Friday</p>
                <p className="mb-0">8:00 AM - 4:00 PM</p>
              </div>
              <div>
                <h5>QLCSS</h5>
                <p className="mb-1">Monday - Friday</p>
                <p className="mb-0">8:00 AM - 4:00 PM</p>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4>📞 Contact Us</h4>
              <hr />
              <p>
                <strong>Phone:</strong> (555) 555-5555
              </p>
              <p>
                <strong>Email:</strong> john@foo.com
              </p>
              <p className="mb-0">Have questions? Contact us during office hours for assistance.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </main>
);

export default RecoveryPage;
