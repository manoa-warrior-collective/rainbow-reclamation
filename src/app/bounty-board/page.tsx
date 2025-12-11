/* eslint-disable operator-linebreak */

'use client';

import { Container, Row, Col, Card, Badge, Spinner, Alert, Form, InputGroup } from 'react-bootstrap';
import BountyBoard, { type Item } from '@/components/BountyBoard';
import { Category, Building } from '@prisma/client';

const { useBountyBoard, formatDate, formatCurrency, getCategoryBadgeColor, formatCategoryName, formatBuildingName } =
  BountyBoard;

/**
 * Bounty Board Page
 * Displays all lost items with bounty rewards
 */
export default function BountyBoardPage() {
  const { items, loading, error, filters, updateFilter, stats } = useBountyBoard();

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="display-4 mb-2">🎯 Bounty Board</h1>
        <p className="lead text-muted">Help reunite lost items with their owners and earn rewards!</p>
      </div>

      {/* Filters */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="g-3">
            <Col md={5}>
              <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search items..."
                  value={filters.searchTerm}
                  onChange={(e) => updateFilter('searchTerm', e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Select
                value={filters.filterCategory}
                onChange={(e) => updateFilter('filterCategory', e.target.value)}
              >
                <option value="ALL">All Categories</option>
                {Object.values(Category).map((cat) => (
                  <option key={cat} value={cat}>
                    {formatCategoryName(cat)}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Select
                value={filters.filterBuilding}
                onChange={(e) => updateFilter('filterBuilding', e.target.value)}
              >
                <option value="ALL">All Buildings</option>
                {Object.values(Building).map((bldg) => (
                  <option key={bldg} value={bldg}>
                    {formatBuildingName(bldg)}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Stats */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="text-center border-primary">
            <Card.Body>
              <h3 className="mb-0">{stats.totalItems}</h3>
              <small className="text-muted">Active Bounties</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center border-warning">
            <Card.Body>
              <h3 className="mb-0">{formatCurrency(stats.totalRewards)}</h3>
              <small className="text-muted">Total Rewards Available</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Items Grid */}
      {items.length === 0 ? (
        <Alert variant="info">
          <Alert.Heading>No items found</Alert.Heading>
          <p>Try adjusting your search filters or check back later for new listings.</p>
        </Alert>
      ) : (
        <Row>
          {items.map((item: Item) => (
            <Col key={item.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow" style={{ transition: 'all 0.3s' }}>
                {item.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    style={{ height: '200px', objectFit: 'cover' }}
                    alt={item.name}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{item.name}</Card.Title>
                    {item.bountyStatus && item.bountyReward && (
                      <Badge bg="success" className="ms-2">
                        {formatCurrency(item.bountyReward)}
                      </Badge>
                    )}
                  </div>

                  <div className="mb-2">
                    <Badge bg={getCategoryBadgeColor(item.category)} className="me-1">
                      {formatCategoryName(item.category)}
                    </Badge>
                    <Badge bg="secondary">{formatBuildingName(item.building)}</Badge>
                  </div>

                  <Card.Text className="text-muted small mb-2">{item.description}</Card.Text>

                  <div className="mt-auto">
                    <hr />
                    <div className="small">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">📍 Location:</span>
                        <span className="fw-semibold">{item.location}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">📅 Date:</span>
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">👤 Reported by:</span>
                        <span>{item.reportedBy}</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-light d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    Contact:
                    {item.contactInfo}
                  </small>
                  <a href={`/recovery?itemId=${item.id}`} className="btn btn-primary btn-sm">
                    Claim Item
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
