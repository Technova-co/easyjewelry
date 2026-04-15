import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Stock Count and Audit Software | EasyJewelry',
  description:
    'Scan barcodes to conduct a full jewelry stock count. Instantly see what is found, what is missing, total gross weight, and total pure weight discrepancies.',
};

export default function MetalStocktakingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}