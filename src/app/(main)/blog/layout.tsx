import type { Metadata } from 'next';

/**
 * Layout for Blog Page
 * 
 * This layout file handles metadata for the blog listing page.
 * The page.tsx stays clean and only handles content rendering.
 */
export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Dive into the world of AI innovation, automation, and creativity. Explore every insight, update, and idea shaping the intelligent future of work.',
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
