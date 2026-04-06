import type { Metadata } from 'next';

/**
 * Layout for Contact Page
 * 
 * This layout file allows us to export metadata even though
 * the page.tsx is a client component (needed for form state).
 */
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Have questions or ideas? We\'re here to help. Connect with RiteFlow to explore AI solutions, partnerships, or support for your next project.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
