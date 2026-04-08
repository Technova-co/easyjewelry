import type { Metadata } from 'next';

/**
 * Layout for Contact Page
 * 
 * This layout file allows us to export metadata even though
 * the page.tsx is a client component (needed for form state).
 */
export const metadata: Metadata = {
  title: 'Contact Us | EasyJewelry',
  description:
    'Have questions? Get in touch with the EasyJewelry team for support, partnerships, or anything about our jewelry software.',
};
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
