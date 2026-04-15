import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Jewelry Order Tracking | EasyJewelry',
  description:
    'Track custom jewelry orders from received to ready. Record order details, deposit payments, and update status through every stage of production.',
};

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}