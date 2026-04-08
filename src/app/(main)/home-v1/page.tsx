import React from 'react';


import ClientLogosOne from '@/components/home/ClientLogos';
import HomeBannerOne from '@/components/home/HomeBanner';



import AboutSection from '@/components/home-v2/AboutSection';
import PricingSection from '@/components/pricing/PricingSection';
import Newsletter from '@/components/shortCode/Newsletter';
import ProcessSection from '@/components/home-v1/ProcessSection';
import WorkflowSection from '@/components/home-v1/WorkflowSection';
import TestimonialOne from '@/components/home-v1/TestimonialOne';
import UseCaseSection from '@/components/useCase/UseCaseSection';

/**
 * Home V1 Page
 * 
 * Alternative home page layout with enhanced sections.
 * 
 * All sections are modular and reusable components.
 *
 */
export default function HomeV1Page() {
  return (
    <>
      {/* Banner */}
      <HomeBannerOne />

      {/* Client Logos */}
      <ClientLogosOne />

      {/* About Section - Variant One: List with checkmarks */}
      <AboutSection variant="one" />

      {/* Process Section */}
      <ProcessSection />

      {/* Use Case Section */}
      <UseCaseSection variant="two" />

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Testimonial Section */}
      <TestimonialOne />

      {/* Pricing Section */}
      <PricingSection variant="two" />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
