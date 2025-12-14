import { prisma } from '@/lib/prisma';
import BountyBoardClient from '@/components/BountyBoardClient';
import { Item } from '@/components/BountyBoard';

// Force dynamic rendering since this page uses database queries
export const dynamic = 'force-dynamic';

/**
 * Server component that fetches bounty items and passes them to the client component
 */
export default async function BountyBoardPage() {
  // Fetch only LOST items with bounty status
  const items = await prisma.item.findMany({
    where: {
      status: 'LOST',
      bountyStatus: true,
    },
    orderBy: [
      { bountyReward: 'desc' }, // Sort by bounty reward first
      { createdAt: 'desc' }, // Then by creation date
    ],
  });

  // Transform the data to match the Item interface
  const transformedItems: Item[] = items.map((item) => ({
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

  return <BountyBoardClient items={transformedItems} />;
}
