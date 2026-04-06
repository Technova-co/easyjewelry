import { Metadata } from 'next';
import { integrationDetailsData } from '@/data/integrationDetailsData';

interface IntegrationDetailsLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const integration = integrationDetailsData.find((item) => item.slug === slug);

  if (!integration) {
    return {
      title: 'Integration Not Found',
    };
  }

  return {
    title: `${integration.name} Integration - RiteFlow`,
    description: integration.description,
  };
}

export default async function IntegrationDetailsLayout({
  children,
}: IntegrationDetailsLayoutProps) {
  return <>{children}</>;
}
