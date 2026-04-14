import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Sales and Jewelry Invoice Software | EasyJewelry',
  description:
    'Create retail and wholesale jewelry sales invoices with fixed or live gold rate pricing. Full metal detail per line item, VAT support, payment collection, and customizable invoice templates built for jewelry businesses.',
};

export default function MetalSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}