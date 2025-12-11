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
 */
export const useBountyBoard = (): BountyBoardHook => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [removedItemIds, setRemovedItemIds] = useState<number[]>(() => {
    // Load removed items from sessionStorage on initial load
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('removedBountyItems');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  const [filters, setFilters] = useState<BountyBoardFilters>({
    searchTerm: '',
    filterCategory: 'ALL',
    filterBuilding: 'ALL',
  });

  const fetchItems = async () => {
    try {
      setLoading(true);

      // TODO: Remove mock data when API is ready
      // Temporary mock data for testing UI
      const useMockData = true; // Set to false when API is ready

      if (useMockData) {
        // Mock data for testing - ONLY items with bounties
        const mockData: Item[] = [
          {
            id: 1,
            name: 'iPhone 13 Pro',
            description: 'Space gray iPhone with blue case, last seen near the cafeteria',
            category: 'ELECTRONICS' as Category,
            status: 'LOST' as Status,
            building: 'CAMPUS_CENTER' as Building,
            location: 'Near food court, table 12',
            date: new Date('2024-12-08').toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1592286927505-f0e2d15c2b3b?w=400',
            contactInfo: 'john.doe@hawaii.edu',
            reportedBy: 'John Doe',
            bountyStatus: true,
            bountyReward: 50.0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 2,
            name: 'Blue Nike Backpack',
            description: 'Navy blue Nike backpack with laptop compartment and UH keychain',
            category: 'ACCESSORIES' as Category,
            status: 'LOST' as Status,
            building: 'BIL' as Building,
            location: 'Second floor study area, near vending machines',
            date: new Date('2024-12-09').toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            contactInfo: 'jane.smith@hawaii.edu',
            reportedBy: 'Jane Smith',
            bountyStatus: true,
            bountyReward: 25.0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 4,
            name: 'Black Leather Wallet',
            description: 'Black leather wallet with student ID and credit cards',
            category: 'ACCESSORIES' as Category,
            status: 'LOST' as Status,
            building: 'POST' as Building,
            location: 'Auditorium, row F seat 8',
            date: new Date('2024-12-10').toISOString(),
            contactInfo: 'alice.wong@hawaii.edu',
            reportedBy: 'Alice Wong',
            bountyStatus: true,
            bountyReward: 75.0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 5,
            name: 'AirPods Pro',
            description: 'White AirPods Pro with charging case',
            category: 'ELECTRONICS' as Category,
            status: 'LOST' as Status,
            building: 'CAMPUS_CENTER' as Building,
            location: 'Library, third floor',
            date: new Date('2024-12-06').toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
            contactInfo: 'mike.chen@hawaii.edu',
            reportedBy: 'Mike Chen',
            bountyStatus: true,
            bountyReward: 40.0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];

        // Simulate network delay
        setTimeout(() => {
          // Filter out removed items
          const filteredData = mockData.filter((item) => !removedItemIds.includes(item.id));
          setItems(filteredData);
          setError(null);
          setLoading(false);
        }, 800);
      } else {
        // Real API call
        const response = await fetch('/api/items/lost');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removedItemIds]);

  const updateFilter = <K extends keyof BountyBoardFilters>(key: K, value: BountyBoardFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeItem = (itemId: number) => {
    // Add to removed items list
    const updatedRemovedIds = [...removedItemIds, itemId];
    setRemovedItemIds(updatedRemovedIds);
    // Save to sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('removedBountyItems', JSON.stringify(updatedRemovedIds));
    }
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
    refetch: fetchItems,
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
