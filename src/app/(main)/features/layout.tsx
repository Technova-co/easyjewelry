import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | EasyJewelry',
  description:
    'Explore every feature of EasyJewelry. From inventory and billing to accounting, and more. Built for jewelry retailers and wholesalers.',
};

export default function IntegrationCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
