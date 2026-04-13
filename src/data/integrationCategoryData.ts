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
  }
];
