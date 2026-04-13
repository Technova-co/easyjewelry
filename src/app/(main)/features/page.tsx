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
              outlineButtonText="Features"
              title="  Every Feature Your Jewelry Business Needs"
              description="From inventory and sales to finance, multi-branch management and store operations — explore every feature EasyJewelry has to offer."
            />

            {/* Category Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" >
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
