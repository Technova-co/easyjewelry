import type { Metadata } from 'next';

/**
 * Layout for Blog Page
 * 
 * This layout file handles metadata for the blog listing page.
 * The page.tsx stays clean and only handles content rendering.
 */
export const metadata: Metadata = {
  title: 'Blog | EasyJewelry',
  description:
    'Practical guides and tips for jewelry businesses. Learn about inventory management, POS software, multi-branch operations, and growing your jewelry store.',
};
/**
 * Layout Component
 * This wraps the page content but doesn't add any visual elements.
 * The actual layout (header/footer) comes from parent layout.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
