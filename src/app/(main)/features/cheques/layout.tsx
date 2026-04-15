import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expense Management and Cheque Payments | EasyJewelry',
  description:
    'Record business expenses paid by cheque against specific expense accounts. SEWA, rent, salaries, government fees and more tracked in your jewelry store software.',
};

export default function ChequesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}