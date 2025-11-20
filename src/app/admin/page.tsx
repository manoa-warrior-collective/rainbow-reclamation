import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';
import StatsGrid from '@/components/StatsGrid';
import AdminActionCards from '@/components/AdminActionCards';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  // Temporarily show session info for debugging
  console.log('Session:', session);

  const users = await prisma.user.findMany({});
  const registeredUsers = await prisma.user.count();

  // Mockup data for stats that don't exist yet in your schema
  const stats = {
    activeListings: 42,
    registeredUsers,
    successfulMatches: 23,
    pendingVerification: 8,
  };

  return (
    <main>
      <header className="admin-header">
        <Container>
          <h1>🛡️ Admin Dashboard - Rainbow Reclamation</h1>
        </Container>
      </header>

      <Container className="py-4">
        <StatsGrid stats={stats} />
        <AdminActionCards />
      </Container>

      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h2>List Users</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
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

export default AdminPage;
