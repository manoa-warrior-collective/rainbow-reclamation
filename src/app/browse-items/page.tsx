import { Container, Row, Col, Alert } from 'react-bootstrap';
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
    } | null,
    '/browse-items',
  );

  // Fetch all items with FOUND status
  const foundItems = await prisma.item.findMany({
    where: {
      status: 'FOUND',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  console.log('Found items count:', foundItems.length); // Debug log

  // Transform items to match the client component expectations
  const transformedItems = foundItems.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    category: item.category,
    status: item.status,
    building: item.building,
    location: item.location,
    date: item.date.toISOString(),
    imageUrl: item.imageUrl || undefined,
    contactInfo: item.contactInfo,
    reportedBy: item.reportedBy,
    bountyStatus: item.bountyStatus,
    bountyReward: item.bountyReward || undefined,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="mb-4">Browse Found Items</h1>
            <p className="text-muted">Items found on campus waiting to be claimed</p>
            {transformedItems.length === 0 ? (
              <Alert variant="info">
                <Alert.Heading>No found items available</Alert.Heading>
                <p>There are currently no found items reported. Check back later!</p>
              </Alert>
            ) : (
              <Row xs={1} md={2} lg={3} className="g-4">
                {transformedItems.map((item) => (
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
