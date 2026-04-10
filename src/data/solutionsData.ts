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
    slug: 'jewelry-retailers',
    iconId: 'MarketingIcon',
    title: 'Jewelry Retailers',
    description: 'Everything a jewelry retail store needs to run smoothly — from the moment a customer walks in to end-of-day reporting.',
    benefits: [
      { id: 1, text: 'Fast POS built for high-value jewelry transactions' },
      { id: 2, text: 'Track every item by karat, weight, and supplier' },
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
    slug: 'jewelry-wholesalers',
    iconId: 'ChartIcon',
    title: 'Jewelry Wholesalers',
    description: 'Built for the unique way wholesale jewelry businesses operate — gram-level buying, pure metal tracking, and bulk transaction management.',
    benefits: [
      { id: 1, text: 'Buy and sell at gram level with auto gold rate pricing' },
      { id: 2, text: 'Gross & pure metal balance tracking' },
      { id: 3, text: 'Operate as retailer and wholesaler in one system' },
      { id: 4, text: 'Fixed and unfixed billing' },
      { id: 5, text: 'KYC system to ensure your compliance' },
      { id: 6, text: 'Inter-branch stock transfers and consolidated reports' },
      { id: 7, text: 'Customer & vendor accounts showcasing currency and metal balances' },
      { id: 8, text: 'Daily report of all transactions' },
    ],
  },
  
];