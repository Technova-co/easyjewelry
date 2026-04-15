import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Currency Transactions — Pay and Receive | EasyJewelry',
  description:
    'Record cash payments and receipts against customer and vendor accounts. Cash, cheque, credit card, Zelle, and bank wire all supported in your jewelry store software.',
};

export default function CurrencyTransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}