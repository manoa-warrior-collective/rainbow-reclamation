'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation';

const BrowseItemsPage = () => {
  const router = useRouter();

  const handleClaimItem = (id: number) => {
    router.push(`/recovery/${id}`);
  };

  return (
    <main>
      <Container className="py-4 mt-4">
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
                  <Button variant="primary" onClick={() => handleClaimItem(item.id)}>
                    Claim Item
                  </Button>
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
