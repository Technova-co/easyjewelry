import type { Metadata } from 'next';

/**
 * Layout for Join Wishlist Page
 * 
 * This layout file allows us to export metadata even though
 * the page.tsx is a client component (needed for form state).
 */
export const metadata: Metadata = {
  title: 'Join Wishlist',
  description:
    'Join Wishlist Page of Riteflow AI is to allow users to join the wishlist of the product or service.',
};

  export default function JoinWishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
