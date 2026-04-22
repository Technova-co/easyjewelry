import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VAT Report for Jewelry Businesses | EasyJewelry',
  description:
    'Complete VAT breakdown across sales, purchases, expenses, and returns. Filter by date range and drill into every transaction for jewelry VAT compliance reporting.',
};

export default function VatReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}