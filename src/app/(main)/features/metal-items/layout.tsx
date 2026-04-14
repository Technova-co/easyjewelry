import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Item Management with Barcode and RFID | EasyJewelry',
  description:
    'Add and manage every jewelry item with karat, purity, item code, barcode and RFID support. Built for gold and silver retailers, wholesalers and manufacturers. Integrates with Zebra printers and scanners.',
};

export default function MetalItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}