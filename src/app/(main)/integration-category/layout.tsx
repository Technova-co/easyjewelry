import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integration Category',
  description:
    'Browse integration categories by function. Discover categorized integrations that align with your workflow — from marketing and finance to project tools, explore AI-ready connections.',
};

export default function IntegrationCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
