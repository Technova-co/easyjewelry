import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Exchange and Gold Conversion Software | EasyJewelry',
  description:
    'Record gold and silver exchanges with full weight tracking. Move metal out of inventory and back in at a different karat or form. Built for jewelry businesses.',
};

export default function MetalExchangesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}