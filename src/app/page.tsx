/* eslint-disable max-len */
// src/app/page.tsx
import { Col, Container, Row, Card } from 'react-bootstrap';
import Link from 'next/link';

const Home = () => (
  <main>
    {/* Hero Section */}
    <Container fluid className="hero py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h1>🌈 Rainbow Reclamation</h1>
            <p className="subtitle fs-4">Mānoa&apos;s Virtual Lost & Found</p>
            <p className="tagline">
              Nothing is lost forever. We&apos;re here to prove that. Save yourself an extra trip to the DMV for that ID
              you lost - let us help you find what matters.
            </p>
            <div className="mt-4">
              <Link href="/browse-items" className="btn btn-primary me-2">
                Browse Found Items
              </Link>
              <Link href="/report-item" className="btn btn-secondary">
                Report Lost Item
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>

    {/* Features Section */}
    <Container className="features py-5">
      <h2 className="text-center mb-5">How It Works</h2>
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="fs-1 mb-3">🎯</div>
              <Card.Title>Create Missing Poster</Card.Title>
              <Card.Text>
                Lost something? Create a detailed missing poster with description and last known location. Our community
                will help you find it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="fs-1 mb-3">🏆</div>
              <Card.Title>Bounty Board</Card.Title>
              <Card.Text>
                Browse active requests from fellow students looking for their lost items. Help others and earn
                recognition in our community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="fs-1 mb-3">📋</div>
              <Card.Title>Recent Listings</Card.Title>
              <Card.Text>
                Check the latest found items posted by the official Mānoa Lost & Found and verified community members.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="fs-1 mb-3">👤</div>
              <Card.Title>Student Profile</Card.Title>
              <Card.Text>
                Manage your account with basic student info including your name and department for secure item recovery.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    {/* Recent Listings */}
    <Container className="recent-listings py-5 bg-light">
      <h2 className="text-center mb-5">Latest Listings</h2>
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <span className="badge bg-success mb-2">FOUND</span>
              <Card.Title>UH Student ID</Card.Title>
              <Card.Text className="text-muted">Found near Campus Center • 2 hours ago</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <span className="badge bg-warning mb-2">MISSING</span>
              <Card.Title>Black Laptop Charger</Card.Title>
              <Card.Text className="text-muted">Last seen in Hamilton Library • 4 hours ago</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <span className="badge bg-success mb-2">FOUND</span>
              <Card.Title>Blue Water Bottle</Card.Title>
              <Card.Text className="text-muted">Found in Keller Hall • 1 day ago</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <span className="badge bg-warning mb-2">MISSING</span>
              <Card.Title>Car Keys with Rainbow Keychain</Card.Title>
              <Card.Text className="text-muted">Last seen near Parking Structure • 2 days ago</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link href="/browse-items" className="btn btn-primary">
          View All Listings
        </Link>
      </div>
    </Container>

    {/* Call to Action */}
    <Container className="cta py-5 text-center">
      <h2>Ready to Get Started?</h2>
      <p>Join the Rainbow Reclamation community and help make lost items a thing of the past.</p>
      <Link href="/auth/signup" className="btn btn-secondary mt-3">
        Create Your Account
      </Link>
    </Container>
  </main>
);

export default Home;
