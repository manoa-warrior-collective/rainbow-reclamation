import { Container, Row, Col, Table, Badge } from 'react-bootstrap';
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

  const myLostItems = items.filter((lostItem) => lostItem.is_found === false);
  const myFoundItems = items.filter((lostItem) => lostItem.is_found === true);

  return (
    <main>
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <h1>My Dashboard</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2>My Lost Items</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Last Seen</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {myLostItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.last_seen}</td>
                    <td>
                      <Badge>Not Found</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Items Found</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {myFoundItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>
                      <Badge>Found</Badge>
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
