/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BrowseItemsPage = () => {
  // Mock items data
  const items = [
    {
      id: 1,
      title: 'Blue Backpack',
      description: 'Found near Hamilton Library',
      category: 'Accessories',
      date: '2024-01-15',
      location: 'Hamilton Library',
      type: 'found',
    },
    {
      id: 2,
      title: 'iPhone 13',
      description: 'Black iPhone found in Campus Center',
      category: 'Electronics',
      date: '2024-01-14',
      location: 'Campus Center',
      type: 'found',
    },
    {
      id: 3,
      title: 'Calculus Textbook',
      description: 'Math textbook left in classroom',
      category: 'Books',
      date: '2024-01-13',
      location: 'Keller Hall',
      type: 'found',
    },
  ];

  return (
    <main>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">Browse Items</h1>
            <p className="text-muted">Found items reported on campus</p>
          </Col>
        </Row>
        <Row>
          {items.map((item) => (
            <Col key={item.id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                  <div className="mb-2">
                    <strong>Location:</strong> {item.location}
                  </div>
                  <div className="mb-3">
                    <strong>Date Found:</strong> {item.date}
                  </div>
                  <Button variant="primary">Claim Item</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default BrowseItemsPage;
