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
  const owner = (session && session.user && session.user.email) || '';
  const items = await prisma.item.findMany({
    where: {
      owner,
    },
  });
  const foundItems = items.filter((item) => item.status === 'FOUND');

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="mb-4">Browse Items</h1>
            <p className="text-muted">Found items reported on campus</p>
            <Row xs={1} md={2} lg={3} className="g-4">
              {foundItems.filter((item) => (
                <Col key={item.firstName + item.lastName}>
                  <FoundItemCard
                    item={item}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BrowseItemsPage;
