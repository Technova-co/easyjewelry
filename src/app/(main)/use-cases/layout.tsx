import type { Metadata } from 'next';

/**
 * Layout for Use Cases Page
 * 
 * This layout file handles metadata for the use cases listing page.
 * The page.tsx stays clean and only handles content rendering.
 */
export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Explore powerful AI solutions built for modern teams. Riteflow combines smart automation, analytics, and real-time insights to streamline how your team works — no matter the industry or size.',
};

/**
 * Layout Component
 * This wraps the page content but doesn't add any visual elements.
 * The actual layout (header/footer) comes from parent layout.
 */
export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
