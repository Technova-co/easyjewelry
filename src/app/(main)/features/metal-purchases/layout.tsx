import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Purchases Software for Jewelry Businesses | EasyJewelry',
  description:
    'Record retail and wholesale metal purchases with full karat, gross weight, pure weight and barcode tag generation.',
};

export default function MetalPurchasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}