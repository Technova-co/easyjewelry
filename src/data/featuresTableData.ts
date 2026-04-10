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
    groupName: 'Point of Sale (POS)',
    features: [
      { id: 101, name: 'Sales Invoice Generation', status: 'yes' },
      { id: 102, name: 'Returns & Exchanges', status: 'yes' },
      { id: 103, name: 'Making Charges Calculation', tooltip: 'Automatically calculates labor/making charges per item based on weight or fixed rate.', status: 'yes' },
      { id: 104, name: 'Wastage / Loss Weight Calculation', tooltip: 'Tracks gold or silver wastage during manufacturing or cutting.', status: 'yes' },
      { id: 105, name: 'Gold Rate Auto-Pricing', tooltip: 'Item price updates automatically based on live or manually set gold rate.', status: 'yes' },
      { id: 106, name: 'Multi-Currency Transactions', status: 'yes' },
      { id: 107, name: 'Discount & Promotions', status: 'yes' },
      { id: 108, name: 'Receipt & Invoice Printing', status: 'yes' },
      { id: 109, name: 'Barcode Scanning at POS', status: 'yes' },
      { id: 110, name: 'RFID Scanning at POS', status: 'yes' },
      { id: 111, name: 'Old Gold / Scrap Buy-Back', tooltip: 'Record and value old jewelry bought from customers against a new purchase.', status: 'yes' },
      { id: 112, name: 'Advance Payment & Partial Payments', status: 'yes' },
    ],
  },
  {
    id: 2,
    groupName: 'Inventory Management',
    features: [
      { id: 201, name: 'Item-Level Stock Tracking', status: 'yes' },
      { id: 202, name: 'Track by Karat (9K, 14K, 18K, 22K, 24K)', tooltip: 'Each item tracked by its exact gold/silver purity level.', status: 'yes' },
      { id: 203, name: 'Gross Weight & Net Weight Tracking', tooltip: 'Tracks total item weight vs pure metal weight separately.', status: 'yes' },
      { id: 204, name: 'Stone Weight & Stone Type Tracking', tooltip: 'Tracks each stone (diamond, ruby, emerald etc.) weight and type per item.', status: 'yes' },
      { id: 205, name: 'SKU & Tag Number Management', status: 'yes' },
      { id: 206, name: 'Category & Sub-Category Management', status: 'yes' },
      { id: 207, name: 'Low Stock Alerts', status: 'yes' },
      { id: 208, name: 'Inter-Branch Stock Transfers', status: 'yes' },
      { id: 209, name: 'Consignment Inventory Tracking', tooltip: 'Track items received from or given to vendors on consignment.', status: 'yes' },
      { id: 210, name: 'Vendor / Supplier Stock Management', status: 'yes' },
      { id: 211, name: 'Purchase Order Management', status: 'yes' },
      { id: 212, name: 'Stock Audit & Physical Count', status: 'yes' },
      { id: 213, name: 'Batch Import via CSV / Barcode', status: 'yes' },
      { id: 214, name: 'Repair & Custom Order Tracking', tooltip: 'Track items sent for repair, with expected completion date and status updates.', status: 'yes' },
    ],
  },
  {
    id: 3,
    groupName: 'Gold & Metal Stock Management',
    features: [
      { id: 301, name: 'Pure Gold Balance Tracking', tooltip: 'Tracks exact pure gold stock in grams across all items.', status: 'yes' },
      { id: 302, name: 'Metal Stock by Karat', status: 'yes' },
      { id: 303, name: 'Karigar / Job Work Management', tooltip: 'Send raw gold or silver to craftsmen and track what was given, what was returned, and wastage.', status: 'yes' },
      { id: 304, name: 'Wastage Tracking per Karigar', status: 'yes' },
      { id: 305, name: 'Metal Received vs Delivered Report', status: 'yes' },
      { id: 306, name: 'Gold Rate Management', tooltip: 'Set and update daily gold/silver rates used across POS and reports.', status: 'yes' },
      { id: 307, name: 'Melting & Casting Records', status: 'partial' },
    ],
  },
  {
    id: 4,
    groupName: 'Accounting & Finance',
    features: [
      { id: 401, name: 'Accounts Receivable / Payable', status: 'yes' },
      { id: 402, name: 'Customer Balance & Credit Tracking', status: 'yes' },
      { id: 403, name: 'Store Cash & Bank Balance Management', status: 'yes' },
      { id: 404, name: 'Expense Management', status: 'yes' },
      { id: 405, name: 'Tax / VAT / GST Handling', status: 'yes' },
      { id: 406, name: 'Profit & Loss Reports', status: 'yes' },
      { id: 407, name: 'Daily Sales Summary Report', status: 'yes' },
      { id: 408, name: 'Salesperson Performance Reports', status: 'yes' },
      { id: 409, name: 'Commission Tracking for Staff', status: 'yes' },
      { id: 410, name: 'Vendor Payment Tracking', status: 'yes' },
      { id: 411, name: 'Cheque / Bank Transfer Management', status: 'yes' },
    ],
  },
  {
    id: 5,
    groupName: 'Customer Management',
    features: [
      { id: 501, name: 'Customer Profiles & History', status: 'yes' },
      { id: 502, name: 'Customer Purchase History', status: 'yes' },
      { id: 503, name: 'Customer Balance & Outstanding', status: 'yes' },
      { id: 504, name: 'Layaway / Installment Plans', tooltip: 'Allow customers to reserve items and pay in installments.', status: 'yes' },
      { id: 505, name: 'Gold / Metal Loan Management', tooltip: 'Track loans given against gold or silver items with interest calculation.', status: 'yes' },
      { id: 506, name: 'Customer Loyalty & Rewards', status: 'partial' },
      { id: 507, name: 'SMS / WhatsApp Notifications', status: 'partial' },
      { id: 508, name: 'Appraisal & Valuation Records', tooltip: 'Record certified appraisals for insurance or resale purposes.', status: 'yes' },
      { id: 509, name: 'Repair Job Status Notifications', status: 'partial' },
    ],
  },
  {
    id: 6,
    groupName: 'Multi-Branch Management',
    features: [
      { id: 601, name: 'Unlimited Branch Locations', status: 'yes' },
      { id: 602, name: 'Centralized Dashboard Across Branches', status: 'yes' },
      { id: 603, name: 'Branch-Level Sales & Stock Reports', status: 'yes' },
      { id: 604, name: 'Stock Transfer Between Branches', status: 'yes' },
      { id: 605, name: 'Branch-Level User Access Control', status: 'yes' },
      { id: 606, name: 'Consolidated Financial Reports', status: 'yes' },
    ],
  },
  {
    id: 7,
    groupName: 'Access & Security',
    features: [
      { id: 701, name: 'Role-Based Access Control', status: 'yes' },
      { id: 702, name: 'Salesman-Level Permissions', tooltip: 'Restrict salesman to only selling — no access to reports or pricing.', status: 'yes' },
      { id: 703, name: 'Manager & Owner Level Access', status: 'yes' },
      { id: 704, name: 'Activity Logs & Audit Trail', status: 'yes' },
      { id: 705, name: 'Multi-User Support', status: 'yes' },
      { id: 706, name: 'Password Protection Per User', status: 'yes' },
    ],
  },
  {
    id: 8,
    groupName: 'Wholesale & B2B',
    features: [
      { id: 801, name: 'Bulk Buying & Selling', status: 'yes' },
      { id: 802, name: 'Gram-Level Wholesale Transactions', tooltip: 'Buy and sell gold or silver by gram with auto price calculation.', status: 'yes' },
      { id: 803, name: 'Retail & Wholesale in One System', status: 'yes' },
      { id: 804, name: 'Gross vs Pure Balance Tracking', tooltip: 'Track total weight separately from pure metal content for wholesale accuracy.', status: 'yes' },
      { id: 805, name: 'Vendor Memo / Consignment Management', status: 'yes' },
      { id: 806, name: 'B2B Customer Pricing Tiers', status: 'partial' },
    ],
  },
  {
    id: 9,
    groupName: 'Platform & Accessibility',
    features: [
      { id: 901, name: 'Web-Based, No Installation Required', status: 'yes' },
      { id: 902, name: 'Works on PC, Tablet & Mobile', status: 'yes' },
      { id: 903, name: 'Cloud Data Storage & Backup', status: 'yes' },
      { id: 904, name: 'Multi-Language Support', status: 'partial' },
      { id: 905, name: 'Customizable to Business Requirements', status: 'yes' },
      { id: 906, name: 'Barcode Label Printing', status: 'yes' },
      { id: 907, name: 'RFID Tag Management', status: 'yes' },
    ],
  },
  {
    id: 10,
    groupName: 'Online Store & Website',
    features: [
      { id: 1001, name: 'Jewelry Website Development', status: 'yes' },
      { id: 1002, name: 'Online Product Catalogue', status: 'yes' },
      { id: 1003, name: 'Inventory Sync with Online Store', status: 'partial' },
      { id: 1004, name: 'Online Order Management', status: 'partial' },
    ],
  },
];