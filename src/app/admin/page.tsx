import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';
import StatsGrid from '@/components/StatsGrid';
import AdminActionCards from '@/components/AdminActionCards';

// Force dynamic rendering since this page uses database queries and auth
export const dynamic = 'force-dynamic';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  // Temporarily show session info for debugging
  console.log('Session:', session);

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
    </main>
  );
};

export default AdminPage;
