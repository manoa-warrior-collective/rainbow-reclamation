import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
// import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

const UserDashboard = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const items = await prisma.stuff.findMany({
    where: {
      owner,
    },
  });

  // Mockup data for user's lost items
  /* const myLostItems = [
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
  ]; */

  return (
    <main>
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <h1>My Dashboard</h1>
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
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
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
            <h2>Items Found</h2>
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
