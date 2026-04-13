import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Branch Management for Jewelry Stores | EasyJewelry',
  description:
    'Manage all your jewelry store locations from one centralized system. Add branches, track stock, monitor sales and control staff access across every location.',
};

export default function MultiBranchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}