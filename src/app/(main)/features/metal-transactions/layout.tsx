import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Transactions — Pay and Receive Metal | EasyJewelry',
  description:
    'Record metal payments and receipts with customers and vendors. Pay or receive gold and silver by weight at the current rate directly against party accounts.',
};

export default function MetalTransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}