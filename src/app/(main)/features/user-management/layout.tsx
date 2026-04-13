import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Management and Access Control for Jewelry Stores | EasyJewelry',
  description:
    'Add staff, assign roles, and control exactly what each user can access in your jewelry store software. Branch-level permissions built for jewelry retail and wholesale businesses.',
};

export default function UserManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}