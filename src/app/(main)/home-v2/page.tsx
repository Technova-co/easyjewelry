import React from 'react';
import HomeV2Banner from '@/components/home-v2/HomeV2Banner';
import ClientLogos from '@/components/home-v2/ClientLogos';
import AboutSection from '@/components/home-v2/AboutSection';
import IntegrationSection from '@/components/integration/IntegrationSection';
import TestimonialSection from '@/components/home-v2/TestimonialSection';
import ComparisonTable from '@/components/home-v2/ComparisonTable';
import PricingSection from '@/components/pricing/PricingSection';
import Newsletter from '@/components/shortCode/Newsletter';
import FeaturesSection from '@/components/features/FeaturesSection';
import UseCaseSection from '@/components/useCase/UseCaseSection';
/**
 * Home V2 Page
 * 
 * Alternative home page layout with video banner and enhanced sections.
 * 
 * All sections are modular and reusable components.
 */
export default function HomeV2Page() {
  return (
    <>
      {/* Banner */}
      <HomeV2Banner />

      {/* Client Logos */}
      <ClientLogos />

      {/* About Section - Variant Two: Statistics Cards */}
      <AboutSection variant="two" />

      {/* Why Choose Section */}
      <FeaturesSection variant="two" />

      {/* Integration Section */}
      <IntegrationSection showFilters={false} variant="two" />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Use Case Section */}
      <UseCaseSection variant="two" />

      {/* Pricing Section */}
      <PricingSection variant="two" />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
