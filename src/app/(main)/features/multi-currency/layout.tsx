import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Currency Support for Jewelry Businesses | EasyJewelry',
  description:
    'Buy and sell jewelry in any currency. EasyJewelry supports multiple currencies with custom exchange rates, making it ideal for jewelry businesses trading internationally.',
};

export default function MultiCurrencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}