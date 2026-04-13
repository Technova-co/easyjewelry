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
 
];
