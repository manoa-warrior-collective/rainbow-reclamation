'use client';

import { useRouter } from 'next/navigation';
import { Row, Col, Button } from 'react-bootstrap';
import { FileText, BarChart, People } from 'react-bootstrap-icons';

const AdminActionCards: React.FC = () => {
  const router = useRouter();

  const handleNewPosting = () => {
    router.push('/admin/create-posting');
  };

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
            <FileText className="me-2" />
            Create Official Posting
          </h3>
          <p>Add new found items from the official Mānoa Lost & Found</p>
          <Button className="btn" onClick={handleNewPosting}>
            New Posting
          </Button>
        </div>
      </Col>

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
