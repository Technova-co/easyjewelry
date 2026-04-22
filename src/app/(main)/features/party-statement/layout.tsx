import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer and Vendor Statement | EasyJewelry',
  description:
    'Full transaction history per customer or vendor showing metal and currency movements, running balances, and every transaction type in your jewelry store software.',
};

export default function PartyStatementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}