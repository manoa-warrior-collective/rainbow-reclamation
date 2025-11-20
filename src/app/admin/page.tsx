// app/admin/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import StatsGrid from '@/components/StatsGrid';
import AdminActionCards from '@/components/AdminActionCards';

const AdminDashboard = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Fetch available stats from your database
  const registeredUsers = await prisma.user.count();

  // Mock data for stats that don't exist yet in your schema
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

export default AdminDashboard;
