import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Layaway Management Software | EasyJewelry',
  description:
    'Let customers reserve jewelry with a deposit and pay over time. Built for gold and silver retailers using jewelry POS software.',
};

export default function MetalLayawayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}