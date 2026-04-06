'use client';

import React from 'react';
import SectionBanner from '@/components/shortCode/SectionBanner';
import IntegrationCategoryCard from '@/components/integration/IntegrationCategoryCard';
import { integrationCategoryData } from '@/data/integrationCategoryData';

export default function IntegrationCategoryPage() {
  return (
    <>
      {/* Integration Category Section */}
      <section className="section-bottom-border relative z-1">
        <div className="container">
          <div className="border-container section-spacing-lg">
            {/* Section Title */}
            <SectionBanner
              outlineButtonText="Integration Category"
              title="Browse Integration Categories by Function"
              description="Discover categorized integrations that align with your workflow — from marketing and finance to project tools, explore AI-ready connections."
            />

            {/* Category Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-sttr-wrapper>
              {integrationCategoryData.map((category) => (
                <IntegrationCategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  toolsCount={category.toolsCount}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
