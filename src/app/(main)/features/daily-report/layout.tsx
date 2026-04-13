// app/features/daily-report/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Report for Jewelry Stores | EasyJewelry',
  description:
    'Get a complete daily business report for your jewelry store — sales, purchases, payments received, returns, cheques, exchanges and metal transactions all in one screen.',
};

export default function DailyReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}