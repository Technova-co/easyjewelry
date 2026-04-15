import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internal Bank Transfers for Jewelry Businesses | EasyJewelry',
  description:
    'Record transfers between your internal bank accounts and cash balances. Move funds from cash on hand to your bank or between accounts in your jewelry store software.',
};

export default function BankTransfersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}