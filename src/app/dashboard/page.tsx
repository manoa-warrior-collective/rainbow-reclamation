import { Container, Row, Col, Table, Badge, Card, Button } from 'react-bootstrap';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
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

  const router = useRouter();

  const myLostItems = items.filter((lostItem) => lostItem.is_found === false);
  const myFoundItems = items.filter((lostItem) => lostItem.is_found === true);

  return (
    <main>
      <Container className="py-4 mt-4">
        <Row className="mb-4">
          <Col>
            <h1>My Dashboard</h1>
          </Col>
        </Row>

        {/* Quick Action Cards */}
        <Row className="mb-4">
          <Col md={6} className="mb-3" />
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
