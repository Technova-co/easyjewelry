import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Purchase Return | EasyJewelry',
  description:
    'Return purchased gold and silver to vendors with full metal detail. Fixed and unfixed returns with VAT reversal built for jewelry businesses.',
};

export default function MetalPurchaseReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}