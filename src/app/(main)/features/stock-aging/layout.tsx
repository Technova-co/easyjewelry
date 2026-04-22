import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Stock Aging Report | EasyJewelry',
  description:
    'See how long every piece has been sitting in your jewelry inventory. Barcode, item code, gross weight, pure weight, and age in days for every unsold item.',
};

export default function StockAgingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}