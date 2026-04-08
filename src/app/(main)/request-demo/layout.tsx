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
  title: 'Get Demo',
  description:
    'Get a free demo of Riteflow AI and discover how it can help your business. Book a personalized demo and see real use cases.',
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
