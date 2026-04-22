import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Integration for Jewelry Stores | EasyJewelry',
  description:
    'Sync your jewelry inventory with Shopify. Manage item status, pricing, and stock from EasyJewelry and push updates to your online store automatically.',
};

export default function ShopifyIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}