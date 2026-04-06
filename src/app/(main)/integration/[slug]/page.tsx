import React from 'react';
import { notFound } from 'next/navigation';
import IntegrationDetailsHeader from '@/components/integration/IntegrationDetailsHeader';
import IntegrationDetailsContent from '@/components/integration/IntegrationDetailsContent';
import RelatedIntegrations from '@/components/integration/RelatedIntegrations';
import { integrationDetailsData } from '@/data/integrationDetailsData';

interface IntegrationDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return integrationDetailsData.map((integration) => ({
    slug: integration.slug,
  }));
}

export default async function IntegrationDetailsPage({
  params,
}: IntegrationDetailsPageProps) {
  const { slug } = await params;
  const integration = integrationDetailsData.find((item) => item.slug === slug);

  if (!integration) {
    notFound();
  }

  return (
    <>
      {/* Integration Details Section */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg" >
            {/* Header */}
            <IntegrationDetailsHeader
              name={integration.name}
              icon={integration.icon}
              description={integration.description}
            />

            {/* Divider */}
            <div className="my-10 md:my-13 gradient-border w-full h-[1px] max-w-[306px] mx-auto"></div>

            {/* Content */}
            <div className="max-w-[793px] mx-auto">

              <IntegrationDetailsContent
                title={integration.content.title}
                paragraphs={integration.content.paragraphs}
                image={integration.content.image}
                codeBlock={integration.content.codeBlock}
                features={integration.content.features}
              />

            </div>
          </div>
        </div>
      </section>

      {/* Related Integrations */}
      <RelatedIntegrations currentSlug={slug} />
      
    </>
  );
}
