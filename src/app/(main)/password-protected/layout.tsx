import type { Metadata } from 'next';

/**
 * Layout for Password Protected Page
 * 
 * This layout file allows us to export metadata even though
 * the page.tsx is a client component (needed for form state).
 */
export const metadata: Metadata = {
  title: 'Password Protected',
  description:
    'Password Protected Page of Riteflow AI is to protect the content of the page from unauthorized access.',
};

  export default function PasswordProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
