import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Sales Reports | EasyJewelry',
  description:
    'Analyze jewelry sales by branch, salesman, customer, or item. Four dedicated sales reports built for jewelry retail and wholesale businesses.',
};

export default function SalesReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}