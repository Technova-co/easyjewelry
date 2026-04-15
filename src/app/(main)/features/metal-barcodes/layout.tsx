import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Barcode Inventory Tracking | EasyJewelry',
  description:
    'See every barcode in your jewelry inventory with full detail. Where it came from, its weight, making charge, location, availability, and full movement history.',
};

export default function MetalBarcodesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}