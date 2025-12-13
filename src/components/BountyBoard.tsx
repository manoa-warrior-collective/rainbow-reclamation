/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import { Status, Category, Building } from '@prisma/client';

// Type definition for Item based on Prisma schema
export interface Item {
  id: number;
  name: string;
  description: string;
  category: Category;
  status: Status;
  building: Building;
  location: string;
  date: string;
  imageUrl?: string;
  contactInfo: string;
  reportedBy: string;
  bountyStatus: boolean;
  bountyReward?: number;
  createdAt: string;
  updatedAt: string;
}

export interface BountyBoardFilters {
  searchTerm: string;
  filterCategory: string;
  filterBuilding: string;
}

export interface BountyBoardStats {
  totalItems: number;
  activeBounties: number;
  totalRewards: number;
}

export interface BountyBoardHook {
  items: Item[];
  allItems: Item[];
  loading: boolean;
  error: string | null;
  filters: BountyBoardFilters;
  updateFilter: <K extends keyof BountyBoardFilters>(key: K, value: BountyBoardFilters[K]) => void;
  removeItem: (itemId: number) => void;
  resetFilters: () => void;
  stats: BountyBoardStats;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for managing bounty board state and logic
 * @param initialItems - Items to display (should be fetched in the parent component)
 */
export const useBountyBoard = (initialItems: Item[] = []): BountyBoardHook => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [removedItemIds, setRemovedItemIds] = useState<number[]>([]);
  const [filters, setFilters] = useState<BountyBoardFilters>({
    searchTerm: '',
    filterCategory: 'ALL',
    filterBuilding: 'ALL',
  });

  // Update items when initialItems changes
  useEffect(() => {
    setItems(initialItems.filter((item) => !removedItemIds.includes(item.id)));
  }, [initialItems, removedItemIds]);

  const updateFilter = <K extends keyof BountyBoardFilters>(key: K, value: BountyBoardFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeItem = (itemId: number) => {
    // Add to removed items list (stored in memory only)
    setRemovedItemIds((prev) => [...prev, itemId]);
    // Remove from current items
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      filterCategory: 'ALL',
      filterBuilding: 'ALL',
    });
  };

  const refetch = async () => {
    // No-op since data is passed as props
    // Parent component should handle refetching
  };

  // Filter items based on current filters
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesCategory = filters.filterCategory === 'ALL' || item.category === filters.filterCategory;
    const matchesBuilding = filters.filterBuilding === 'ALL' || item.building === filters.filterBuilding;

    return matchesSearch && matchesCategory && matchesBuilding;
  });

  // Sort by bounty reward (highest first), then by date
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a.bountyStatus && b.bountyStatus && a.bountyReward && b.bountyReward) {
      return b.bountyReward - a.bountyReward;
    }
    if (a.bountyStatus && !b.bountyStatus) return -1;
    if (!a.bountyStatus && b.bountyStatus) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Calculate statistics
  const stats: BountyBoardStats = {
    totalItems: items.length,
    activeBounties: items.filter((i) => i.bountyStatus).length,
    totalRewards: items.reduce((sum, i) => sum + (i.bountyReward || 0), 0),
  };

  return {
    items: sortedItems,
    allItems: items,
    loading,
    error,
    filters,
    updateFilter,
    removeItem,
    resetFilters,
    stats,
    refetch,
  };
};

/**
 * Utility functions for formatting
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getCategoryBadgeColor = (category: Category): string => {
  const colors: Record<Category, string> = {
    [Category.ELECTRONICS]: 'primary',
    [Category.CLOTHING]: 'info',
    [Category.ACCESSORIES]: 'warning',
    [Category.DAILY_NECESSITIES]: 'success',
    [Category.OTHER]: 'secondary',
  };
  return colors[category];
};

export const formatCategoryName = (category: string): string => {
  return category
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
};

export const formatBuildingName = (building: string): string => {
  return building.replace('_', ' ');
};

/**
 * BountyBoard component
 * Main component that can be used directly or through the custom hook
 */
const BountyBoard = {
  useBountyBoard,
  formatDate,
  formatCurrency,
  getCategoryBadgeColor,
  formatCategoryName,
  formatBuildingName,
};

export default BountyBoard;
