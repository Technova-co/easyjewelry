import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chart of Accounts for Jewelry Businesses | EasyJewelry',
  description:
    'A complete chart of accounts showing every bank, cash, expense, salary, liability, and party balance in your jewelry store software with date range filtering and drill-down.',
};

export default function ChartOfAccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}