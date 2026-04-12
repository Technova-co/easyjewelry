import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description:
    "Explore EasyJewelry's powerful AI features. From automated customer interactions to smart workflow scheduling, discover how our AI tools simplify work and scale with your business.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
