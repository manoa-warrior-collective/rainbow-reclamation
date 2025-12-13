/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation';

// Define the Item type based on your Prisma schema
type Item = {
  id: number;
  name: string;
  description: string;
  category: string;
  status: string;
  building: string;
  location: string;
  date: Date;
  imageUrl: string | null;
  contactInfo: string;
  reportedBy: string;
  bountyStatus: boolean;
  bountyReward: number | null;
  createdAt: Date;
  updatedAt: Date;
};

const FoundItemCard = ({ items }: { items: Item }) => {
  const router = useRouter();

  const handleClaimItem = () => {
    router.push(`/recovery/${items.id}`);
  };

  return (
    <Card className="h-100">
      {items.imageUrl && (
        <Card.Img variant="top" src={items.imageUrl} alt={items.name} style={{ height: '200px', objectFit: 'cover' }} />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{items.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{items.category}</Card.Subtitle>
        <Card.Text>{items.description}</Card.Text>
        <div className="mb-2">
          <strong>Location:</strong> {items.building} - {items.location}
        </div>
        <div className="mb-3">
          <strong>Date Found:</strong> {new Date(items.date).toLocaleDateString()}
        </div>
        {items.bountyStatus && items.bountyReward && (
          <div className="mb-3 text-success">
            <strong>Bounty:</strong> ${items.bountyReward}
          </div>
        )}
        <Button variant="primary" onClick={handleClaimItem} className="mt-auto">
          Claim Item
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FoundItemCard;
