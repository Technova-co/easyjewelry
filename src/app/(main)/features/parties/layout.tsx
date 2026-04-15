import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer and Vendor Management with KYC | EasyJewelry',
  description:
    'Manage customers and vendors with full KYC compliance. Passport, residency, source of funds, and political connection fields built into your jewelry store software.',
};

export default function PartiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}