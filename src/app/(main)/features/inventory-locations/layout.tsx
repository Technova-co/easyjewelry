import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Inventory Location Tracking | EasyJewelry',
  description:
    'Know exactly where every jewelry piece is stored. Assign locations to barcode-tagged items, change locations instantly, and print location tags for your displays.',
};

export default function InventoryLocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}