import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Fixing — Convert Metal to Currency | EasyJewelry',
  description:
    'Convert customer or vendor metal balances to currency and vice versa. Built for gold and silver businesses managing accounts in both metal weight and cash.',
};

export default function MetalFixingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}