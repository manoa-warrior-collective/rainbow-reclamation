'use client';

import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const UserDashboard = () => {
  const router = useRouter();

  // Mockup data for user's lost items
  const myLostItems = [
    {
      id: 1,
      title: 'Red Umbrella',
      category: 'Accessories',
      location: 'Hamilton Library',
      dateLost: '2024-01-10',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Laptop Charger',
      category: 'Electronics',
      location: 'Campus Center',
      dateLost: '2024-01-08',
      status: 'Matched',
    },
  ];

  // Mock data for user's found item reports
  const myFoundItems = [
    {
      id: 1,
      title: 'Blue Water Bottle',
      category: 'Accessories',
      location: 'Keller Hall',
      dateFound: '2024-01-12',
      status: 'Pending',
    },
  ];

  return (
    <main>
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <h1>My Dashboard</h1>
          </Col>
        </Row>

        {/* Quick Action Cards */}
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Browse Items</Card.Title>
                <Card.Text>Check if your lost item has been found or browse all items.</Card.Text>
                <Button variant="primary" onClick={() => router.push('/browse-items')}>
                  Browse Items
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Report Lost Item</Card.Title>
                <Card.Text>Create a new lost item report so others can help you find it.</Card.Text>
                <Button variant="secondary" onClick={() => router.push('/add-lost-item')}>
                  Report Lost Item
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* My Lost Items */}
        <Row className="mb-4">
          <Col>
            <h2>My Lost Items</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Last Seen</th>
                  <th>Date Lost</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {myLostItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.location}</td>
                    <td>{item.dateLost}</td>
                    <td>
                      <Badge bg={item.status === 'Matched' ? 'success' : 'warning'}>{item.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* My Found Item Reports */}
        <Row>
          <Col>
            <h2>Items I Found</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Location Found</th>
                  <th>Date Found</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {myFoundItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.location}</td>
                    <td>{item.dateFound}</td>
                    <td>
                      <Badge bg="info">{item.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserDashboard;
