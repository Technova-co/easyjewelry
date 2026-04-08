import type { Metadata } from 'next';

/**
 * Layout for Get Demo Page
 * 
 * This layout file allows us to export metadata even though
 * the page.tsx is a client component (needed for form state).
 * 
 * Layout files are always Server Components and can export metadata.
 */
export const metadata: Metadata = {
  title: 'Request Demo | EasyJewelry',
  description:
    'Book a free personalized demo of EasyJewelry and see how it can transform your jewelry business.',
};

/**
 * Layout Component
 * This wraps the page content but doesn't add any visual elements.
 * The actual layout (header/footer) comes from parent layout.
 */
export default function GetDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
