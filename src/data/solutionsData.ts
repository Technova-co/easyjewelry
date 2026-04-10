// data/solutionsData.ts

export interface SolutionBenefit {
  id: number;
  text: string;
}

export interface Solution {
  id: number;
  slug: string;
  iconId: string;
  title: string;
  description: string;
  benefits: SolutionBenefit[];
}

export const solutionsData: Solution[] = [
  {
    id: 1,
    slug: 'for-retailers',
    iconId: 'MarketingIcon',
    title: 'For Jewelry Retailers',
    description: 'Everything a jewelry retail store needs to run smoothly — from the moment a customer walks in to end-of-day reporting.',
    benefits: [
      { id: 1, text: 'Fast POS built for high-value jewelry transactions' },
      { id: 2, text: 'Track every item by karat, weight, stone, and SKU' },
      { id: 3, text: 'Old gold / scrap buy-back at point of sale' },
      { id: 4, text: 'Layaway and installment payment plans' },
      { id: 5, text: 'Customer purchase history and balance tracking' },
      { id: 6, text: 'Salesman-level access — sell only, no reports' },
      { id: 7, text: 'Barcode and RFID scanning for fast stock counts' },
      { id: 8, text: 'Daily sales and performance reports' },
    ],
  },
  {
    id: 2,
    slug: 'for-wholesalers',
    iconId: 'ChartIcon',
    title: 'For Jewelry Wholesalers',
    description: 'Built for the unique way wholesale jewelry businesses operate — gram-level buying, pure metal tracking, and bulk transaction management.',
    benefits: [
      { id: 1, text: 'Buy and sell at gram level with auto gold rate pricing' },
      { id: 2, text: 'Gross weight vs pure metal balance tracking' },
      { id: 3, text: 'Operate as retailer and wholesaler in one system' },
      { id: 4, text: 'Vendor consignment and memo management' },
      { id: 5, text: 'Karigar / job work tracking with wastage reports' },
      { id: 6, text: 'Inter-branch stock transfers and consolidated reports' },
      { id: 7, text: 'B2B customer accounts with credit and balance tracking' },
      { id: 8, text: 'Bulk invoice generation for trade customers' },
    ],
  },
  {
    id: 3,
    slug: 'for-manufacturers',
    iconId: 'TtIcon',
    title: 'For Jewelry Manufacturers',
    description: 'Track raw materials, manage craftsmen, monitor production, and keep full control of your metal stock from raw to finished product.',
    benefits: [
      { id: 1, text: 'Raw gold and silver stock management by karat' },
      { id: 2, text: 'Karigar job work — issue metal, track returns and wastage' },
      { id: 3, text: 'Production order tracking from design to completion' },
      { id: 4, text: 'Melting and casting records' },
      { id: 5, text: 'Finished goods inventory with full metal breakdown' },
      { id: 6, text: 'Vendor and supplier payment tracking' },
      { id: 7, text: 'Commission and labor cost tracking per job' },
      { id: 8, text: 'Consolidate production across multiple workshops' },
    ],
  },
  {
    id: 4,
    slug: 'for-multi-branch',
    iconId: 'InsightsIcon',
    title: 'For Multi-Branch Stores',
    description: 'One dashboard to manage all your locations — stock, sales, staff, and finance across every branch in real time.',
    benefits: [
      { id: 1, text: 'Centralized dashboard across unlimited branch locations' },
      { id: 2, text: 'Real-time stock visibility across all stores' },
      { id: 3, text: 'Inter-branch stock transfers with full audit trail' },
      { id: 4, text: 'Branch-level and consolidated financial reports' },
      { id: 5, text: 'Branch-specific user access and permissions' },
      { id: 6, text: 'Monitor salesperson performance per branch' },
      { id: 7, text: 'Set different pricing or gold rates per branch' },
      { id: 8, text: 'Manage all branches from any device, anywhere' },
    ],
  },
];