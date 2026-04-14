export interface IntegrationCategory {
  id: number;
  title: string;
  description: string;
  toolsCount: number;
  link: string;
}

export const integrationCategoryData: IntegrationCategory[] = [
  {
    id: 1,
    title: 'Daily Report',
    description:
      'A complete snapshot of your entire business for any given day — sales, purchases, payments, returns, exchanges and more.',
    toolsCount: 8,
    link: '/features/daily-report',
  },

   {
    id: 2,
    title: 'Automatic Cloud Backup',
    description:
      'Your data is backed up automatically on a schedule you control. Set your frequency, provide your email, and EasyJewelry handles the rest.',
    toolsCount: 8,
    link: '/features/cloud-backup',
  },
    {
    id: 3,
    title: "Multi-Branch Management",
    description:"Add unlimited branch locations and manage all of them from one centralized system. Stock, sales, staff, and finance across every location in real time.",
    link:"/features/multi-branch",
    toolsCount: 8,
  },
  {
  id: 4,
  title: "Multi-Currency Support",
  description: "Buy and sell in any currency. Add currencies, set exchange rates, and transact freely across your entire jewelry business.",
  link: "/features/multi-currency",
  toolsCount: 5,
},
{
  id: 5,
  title: "User Management and Access Control",
  description: "Add staff, assign them to branches, and control exactly what each person can see and do in your jewelry store software.",
  link: "/features/user-management",
  toolsCount: 6,
},
{
  id: 6,
  title: "Jewelry Item Management with Barcode and RFID",
  description: "Define every jewelry item with karat, purity, and item code. Tag with barcodes or RFID via Zebra hardware and scan at point of sale, stock counts, and transfers.",
  link: "/features/metal-items",
  toolsCount: 7,
},
{
  id: 7,
  title: "Metal Sales and Jewelry Invoicing",
  description: "Create retail and wholesale jewelry invoices with fixed or live gold rate pricing, full metal detail per line item, VAT, and payment collection all in one screen.",
  link: "/features/metal-sales",
  toolsCount: 9,
},
{
  id: 8,
  title: "Jewelry Sales Return Management",
  description: "Process customer returns with full metal detail. Gross weight, pure weight, VAT reversal, and live rate recording all handled automatically.",
  link: "/features/metal-sales-return",
  toolsCount: 6,
},
 
];
