/* eslint-disable react/prop-types */

'use client';

import { Row, Col } from 'react-bootstrap';

interface StatsGridProps {
  stats: {
    activeListings: number;
    registeredUsers: number;
    successfulMatches: number;
    pendingVerification: number;
  };
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <Row className="stats-grid mb-4">
    <Col xs={12} sm={6} lg={3} className="mb-3">
      <div className="stat-card">
        <div className="stat-number">{stats.activeListings}</div>
        <div>Active Listings</div>
      </div>
    </Col>
    <Col xs={12} sm={6} lg={3} className="mb-3">
      <div className="stat-card">
        <div className="stat-number">{stats.registeredUsers}</div>
        <div>Registered Users</div>
      </div>
    </Col>
    <Col xs={12} sm={6} lg={3} className="mb-3">
      <div className="stat-card">
        <div className="stat-number">{stats.successfulMatches}</div>
        <div>Successful Matches</div>
      </div>
    </Col>
    <Col xs={12} sm={6} lg={3} className="mb-3">
      <div className="stat-card">
        <div className="stat-number">{stats.pendingVerification}</div>
        <div>Pending Verification</div>
      </div>
    </Col>
  </Row>
);

export default StatsGrid;
