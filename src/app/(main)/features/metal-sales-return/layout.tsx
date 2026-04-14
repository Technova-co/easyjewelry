import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Sales Return Management | EasyJewelry',
  description:
    'Process jewelry sales returns with full metal detail. Record returned items with purity, gross weight, pure weight, VAT reversal and exchange rate at the time of return. Built for gold and silver jewelry businesses.',
};

export default function MetalSalesReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}