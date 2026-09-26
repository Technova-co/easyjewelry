import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Multi-Branch Management for Jewelry Stores | EasyJewelry',
  },
  description:
    'Manage every jewelry store location from one place with EasyJewelry. Track branch inventory, transfers, staff access, and reports across your business.',
  openGraph: {
    title: 'Multi-Branch Management for Jewelry Stores | EasyJewelry',
    description:
      'One system for every jewelry store location. See stock, sales, transfers, and reports across all your branches.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function MultiBranchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}