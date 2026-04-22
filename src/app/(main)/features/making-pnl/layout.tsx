import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Making Profit and Loss by Barcode | EasyJewelry',
  description:
    'See the profit or loss on every sold jewelry piece. Cost vs sale price vs making charge per barcode, with date range filtering built into your jewelry store software.',
};

export default function MakingPnlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}