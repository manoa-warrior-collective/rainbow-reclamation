/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const SubmissionPage = () => (
  <main>
    <Container id="submission" className="py-4 mt-4">
      <Row className="mb-4">
        <Col>
          <h1>How to Submit a Found Item</h1>
          <p className="lead">Help reunite lost items with their owners by following these simple steps.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <h3 className="mb-3">📋 Step-by-Step Submission Process</h3>

              <div className="mb-4">
                <h5>1. Secure the Item</h5>
                <p>
                  Keep the found item in a safe place. Do not attempt to access personal information on electronic
                  devices or open wallets/bags beyond what&apos;s necessary to identify the owner.
                </p>
              </div>

              <div className="mb-4">
                <h5>2. Document the Item</h5>
                <p>Take note of important details:</p>
                <ul>
                  <li>Exact location where item was found</li>
                  <li>Date and time of discovery</li>
                  <li>Distinctive features or markings</li>
                  <li>Take a photo if possible (optional but helpful)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5>3. Bring Item to Drop-off Location</h5>
                <p>
                  Visit one of our submission offices during operating hours (Monday-Friday, 8:00 AM - 4:00 PM) with the
                  found item.
                </p>
              </div>

              <div className="mb-4">
                <h5>4. Complete Submission Form</h5>
                <p>
                  Fill out a brief form with the item details and your contact information. This helps us track items
                  and contact you if needed.
                </p>
              </div>

              <div className="mb-4">
                <h5>5. Optional: Post to Bounty Board</h5>
                <p>
                  If you prefer to hold onto the item yourself, you can post it on our Bounty Board to help the owner
                  find you directly. You may even receive a reward!
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 className="mb-3">⚠️ Important Guidelines</h3>
              <ul>
                <li>Never attempt to return valuable items directly without proper verification</li>
                <li>High-value items (electronics, jewelry, wallets) should be turned in immediately</li>
                <li>Do not access personal information on phones, laptops, or ID cards</li>
                <li>Perishable items or medication should be reported immediately</li>
                <li>You are not liable for items once properly submitted to Lost & Found</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <h3 className="mb-3">💰 Bounty Rewards</h3>
              <p>
                Many lost items have bounty rewards attached! If you find and return an item that has an active bounty,
                you may be eligible to receive the reward once the owner claims their item and confirms the return.
              </p>
              <p className="mb-0">
                Check the <a href="/bounty-board">Bounty Board</a> to see which items currently have rewards.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <h4>📍 Drop-off Locations</h4>
              <hr />
              <div className="mb-3">
                <h5>ICS Admin Office</h5>
                <p className="mb-1">Monday – Friday</p>
                <p className="mb-0">8:00 AM – 4:00 PM</p>
              </div>
              <div className="mb-3">
                <h5>QLCSS</h5>
                <p className="mb-1">Monday – Friday</p>
                <p className="mb-0">8:00 AM – 4:00 PM</p>
              </div>
              <div>
                <h5>Campus Center Info Desk</h5>
                <p className="mb-1">Monday – Friday</p>
                <p className="mb-0">9:00 AM – 5:00 PM</p>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>📞 Contact Us</h4>
              <hr />
              <p>
                <strong>Phone:</strong> (555) 555-5555
              </p>
              <p>
                <strong>Email:</strong> john@foo.com
              </p>
              <p className="mb-0">Have questions about submitting a found item? Contact us during office hours.</p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4>🏆 Good Samaritan Recognition</h4>
              <hr />
              <p className="mb-0">
                We appreciate your honesty! Frequent contributors may be recognized in our monthly newsletter and are
                eligible for Good Samaritan awards.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </main>
);

export default SubmissionPage;
