import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Business Balance Sheet | EasyJewelry',
  description:
    'A complete balance sheet showing metal and currency balances across partners, stock, party accounts, bank, liabilities, and VAT for your jewelry business.',
};

export default function BalanceSheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}