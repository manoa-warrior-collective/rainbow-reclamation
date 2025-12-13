'use client';

import { useRouter } from 'next/navigation';
import { Row, Col, Button } from 'react-bootstrap';
import { BarChart, People } from 'react-bootstrap-icons';

const AdminActionCards: React.FC = () => {
  const router = useRouter();

  const handleViewReports = () => {
    router.push('/admin/analytics');
  };

  const handleManageUsers = () => {
    // Scroll to users section on same page
    const usersSection = document.getElementById('list');
    usersSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Row className="admin-actions">
      <Col xs={12} md={6} className="mb-3">
        <div className="action-card">
          <h3>
            <BarChart className="me-2" />
            Analytics
          </h3>
          <p>View platform usage statistics and success metrics</p>
          <Button className="btn" onClick={handleViewReports}>
            View Reports
          </Button>
        </div>
      </Col>

      <Col xs={12} md={6} className="mb-3">
        <div className="action-card">
          <h3>
            <People className="me-2" />
            User Management
          </h3>
          <p>Manage user accounts and permissions</p>
          <Button className="btn" onClick={handleManageUsers}>
            Manage Users
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default AdminActionCards;
