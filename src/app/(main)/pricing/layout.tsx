import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description:
    "Choose a plan that fits your needs—whether you're a solo creator or a growing team. Simple, transparent pricing with no hidden fees.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
