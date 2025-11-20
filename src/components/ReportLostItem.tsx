'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ReportLostPage = () => (
  <main>
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h2>Report Lost Item</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formItemName">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="text" placeholder="e.g., Blue Backpack" autoComplete="off" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Detailed description of your lost item..."
                    autoComplete="off"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Select required autoComplete="off">
                    <option value="">Select category...</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="books">Books</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label>Last Seen Location</Form.Label>
                  <Form.Control type="text" placeholder="e.g., Hamilton Library" autoComplete="off" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDate">
                  <Form.Label>Date Lost</Form.Label>
                  <Form.Control type="date" required autoComplete="off" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit Report
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </main>
);

export default ReportLostPage;
