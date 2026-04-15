import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Transfer Between Branches | EasyJewelry',
  description:
    'Transfer gold and silver between branches with full metal detail. Item, purity, gross weight and pure weight tracked per transfer in your jewelry management software.',
};

export default function MetalTransfersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}