export type FeatureStatus = 'yes' | 'no' | 'partial';

export interface FeatureItem {
  id: number;
  name: string;
  tooltip?: string;
  status: FeatureStatus;
}

export interface FeatureGroup {
  id: number;
  groupName: string;
  features: FeatureItem[];
}

export const featuresTableData: FeatureGroup[] = [
  {
    id: 1,
    groupName: 'Inventory & Stock',
    features: [
      { id: 101, name: 'Item-Level Stock Tracking by SKU & Tag Number', status: 'yes' },
      { id: 102, name: 'Track by Karat — 9K, 14K, 18K, 22K, 24K', tooltip: 'Each item tracked by its exact gold or silver purity level.', status: 'yes' },
      { id: 103, name: 'Gross Weight & Net Weight Per Item', tooltip: 'Tracks total item weight vs pure metal weight separately.', status: 'yes' },
      { id: 105, name: 'Category & Sub-Category Management', status: 'yes' },
      { id: 106, name: 'Barcode Scanning for Stock Management', status: 'yes' },
      { id: 107, name: 'RFID Tag Scanning & Management', status: 'yes' },
      { id: 108, name: 'Barcode Label Printing', status: 'yes' },
      { id: 109, name: 'Low Stock Alerts & Reorder Thresholds', status: 'yes' },
      { id: 110, name: 'Stock Audit & Physical Count', tooltip: 'Run a full stock count and reconcile against system records.', status: 'yes' },
      { id: 111, name: 'Batch Import via CSV or Barcode Scan', status: 'yes' },
      { id: 112, name: 'Inter-Branch Stock Transfers', tooltip: 'Move stock between locations with a full transfer audit trail.', status: 'yes' },
      { id: 114, name: 'Vendor & Supplier Stock Management', status: 'yes' },
      { id: 116, name: 'Repair & Custom Order Tracking', tooltip: 'Track items sent for repair with expected completion date and live status.', status: 'yes' },
      { id: 115, name: 'Stock Location', status: 'yes' },
      { id: 112, name: 'Scheme System', status: 'yes' },

    ],
  },
  {
    id: 2,
    groupName: 'Sales & Billing',
    features: [
      { id: 201, name: 'Fast POS Built for Jewelry Transactions', status: 'yes' },
      { id: 202, name: 'Making Charges Calculation', tooltip: 'Automatically calculates labor or making charges per item based on weight or fixed rate.', status: 'yes' },
      { id: 204, name: 'Gold Rate Auto-Pricing', tooltip: 'Item price updates automatically based on live or manually set gold rate.', status: 'yes' },
      { id: 205, name: 'Fixed & Unfixed Billing in One Invoice', tooltip: 'Bill fixed-price items and metal-rate based items together in the same invoice.', status: 'yes' },
      { id: 206, name: 'Old Gold & Scrap Buy-Back at POS', tooltip: 'Record and value old jewelry bought from customers against a new purchase.', status: 'yes' },
      { id: 207, name: 'Gold Exchange & Trade-In Management', tooltip: 'Exchange old gold or silver from trade customers and adjust value against their purchase.', status: 'yes' },
      { id: 208, name: 'Advance & Partial Payment Collection', status: 'yes' },
      { id: 209, name: 'Layaway & Installment Payment Plans', tooltip: 'Allow customers to reserve items and pay in installments.', status: 'yes' },
      { id: 210, name: 'Returns & Exchanges', status: 'yes' },
      { id: 212, name: 'Multi-Currency Transactions', status: 'yes' },
      { id: 213, name: 'Professional Invoice Generation', status: 'yes' },
      { id: 214, name: 'Tax, VAT  Handling', status: 'yes' },
      { id: 215, name: 'Receipt & Invoice Printing', status: 'yes' },
      { id: 216, name: 'Gram-Level Wholesale Buying & Selling', tooltip: 'Buy and sell gold or silver by gram with automatic price calculation.', status: 'yes' },
      { id: 217, name: 'Trade Invoice with Karat, Weight Breakdown', tooltip: 'Generate wholesale invoices showing full metal and stone detail per line item.', status: 'yes' },
    ],
  },
  {
    id: 3,
    groupName: 'Finance & Accounts',
    features: [
      { id: 301, name: 'Accounts Receivable & Payable', status: 'yes' },
      { id: 302, name: 'Customer Balance & Outstanding Tracking', status: 'yes' },
      { id: 303, name: 'Trade Customer Credit Limit Management', tooltip: 'Set credit limits per trade buyer so you never oversell to a customer who owes you.', status: 'yes' },
      { id: 304, name: 'Store Cash & Bank Balance Management', status: 'yes' },
      { id: 305, name: 'Expense Management', status: 'yes' },
      { id: 306, name: 'Profit & Loss Reports', status: 'yes' },
      { id: 307, name: 'Daily Sales Summary Report', status: 'yes' },
      { id: 308, name: 'Vendor Payment & Balance Tracking', tooltip: 'Track what each supplier owes you and what you owe them with full transaction history.', status: 'yes' },
      { id: 309, name: 'Vendor Metal Balance & Receipt Tracking', tooltip: 'Track exactly how much metal each vendor owes you and record metal receipts against their account.', status: 'yes' },
      { id: 310, name: 'Bank Transfer Management', status: 'yes' },
      { id: 311, name: 'Salesperson Performance & Commission Reports', status: 'yes' },
      { id: 312, name: 'Gold & Metal Loan Management', tooltip: 'Track loans given against gold or silver items with interest calculation.', status: 'yes' },
      { id: 314, name: 'Consolidated Financial Reports Across Branches', status: 'yes' },
      { id: 315, name: 'Trail Balance', status: 'yes' },
      { id: 316, name: 'Balance Sheet', status: 'yes' },
    ],
  },
];