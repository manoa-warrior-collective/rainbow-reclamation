/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BrowseFoundPage = () => {
  // Mock found items data
  const foundItems = [
    {
      id: 1,
      title: 'Blue Backpack',
      description: 'Found near Hamilton Library',
      category: 'Accessories',
      dateFound: '2024-01-15',
      location: 'Hamilton Library',
    },
    {
      id: 2,
      title: 'iPhone 13',
      description: 'Black iPhone found in Campus Center',
      category: 'Electronics',
      dateFound: '2024-01-14',
      location: 'Campus Center',
    },
    {
      id: 3,
      title: 'Calculus Textbook',
      description: 'Math textbook left in classroom',
      category: 'Books',
      dateFound: '2024-01-13',
      location: 'Keller Hall',
    },
  ];

  return (
    <main>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">Browse Found Items</h1>
          </Col>
        </Row>
        <Row>
          {foundItems.map((item) => (
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
                    <strong>Date Found:</strong> {item.dateFound}
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

export default BrowseFoundPage;
