import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integration',
  description:
    'Connect RiteFlow seamlessly to your favorite apps. Integrate with Slack, Zapier, Salesforce, Notion, and more to sync data instantly and automate workflows.',
};

export default function IntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
