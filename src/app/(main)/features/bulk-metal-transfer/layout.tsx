import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Jewelry Stock Transfer Software | EasyJewelry',
  description:
    'Scan multiple barcode-tagged jewelry pieces and transfer them to any branch in one transaction. Built for multi-branch jewelry store management.',
};

export default function BulkMetalTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}