import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatic Cloud Backup for Jewelry Stores | EasyJewelry',
  description:
    'EasyJewelry automatically backs up your jewelry store data every hour. Never lose a sale, invoice, or inventory record again.',
};

export default function CloudBackupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}