import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Purchase Reports | EasyJewelry',
  description:
    'Analyze jewelry purchases by branch, purchaser, vendor, or item. Four dedicated purchase reports built for gold and silver jewelry businesses.',
};

export default function PurchaseReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}