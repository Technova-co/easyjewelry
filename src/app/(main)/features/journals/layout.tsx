import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Journal Entries | EasyJewelry',
  description:
    'Post manual journal entries directly between accounts in your jewelry store software. Full double-entry accounting built into your jewelry ERP system.',
};

export default function JournalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}