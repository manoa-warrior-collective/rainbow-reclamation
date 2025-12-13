import { Container, Row, Col } from 'react-bootstrap';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import FoundItemCard from '@/components/FoundItemCard';

const BrowseItemsPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );

  // Fetch all items with FOUND status (not filtered by current user)
  // This allows users to browse all found items reported by anyone
  const foundItems = await prisma.item.findMany({
    where: {
      status: 'FOUND',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="mb-4">Browse Items</h1>
            <p className="text-muted">Found items reported on campus</p>
            {foundItems.length === 0 ? (
              <p className="text-muted">No found items available at this time.</p>
            ) : (
              <Row xs={1} md={2} lg={3} className="g-4">
                {foundItems.map((item) => (
                  <Col key={item.id}>
                    <FoundItemCard items={item} />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BrowseItemsPage;
