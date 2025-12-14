/* eslint-disable react/jsx-one-expression-per-line */
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

// Force dynamic rendering since this page uses database queries and auth
export const dynamic = 'force-dynamic';

const UserDashboard = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const currentUser = (session && session.user && session.user.email) || '';

  // Fetch items reported by the current user
  const items = await prisma.item.findMany({
    where: {
      reportedBy: currentUser,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Separate lost and found items
  const myLostItems = items.filter((item) => item.status === 'LOST');
  const myFoundItems = items.filter((item) => item.status === 'FOUND');

  // Helper function to get badge variant based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'LOST':
        return <Badge bg="danger">Lost</Badge>;
      case 'FOUND':
        return <Badge bg="success">Found</Badge>;
      case 'CLAIMED':
        return <Badge bg="info">Claimed</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <main>
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <h1>My Dashboard</h1>
            <p className="text-muted">
              Current user:
              {currentUser}
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2>My Lost Items</h2>
            {myLostItems.length === 0 ? (
              <p className="text-muted">No lost items reported yet.</p>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Date Lost</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myLostItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>
                        {item.building} -{item.location}
                      </td>
                      <td>{new Date(item.date).toLocaleDateString()}</td>
                      <td>{getStatusBadge(item.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Items I Found</h2>
            {myFoundItems.length === 0 ? (
              <p className="text-muted">No found items reported yet.</p>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Date Found</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myFoundItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>
                        {item.building} -{item.location}
                      </td>
                      <td>{new Date(item.date).toLocaleDateString()}</td>
                      <td>{getStatusBadge(item.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserDashboard;
