import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';
import TeamSection from '@/components/about/TeamSection';
import ResearchSection from '@/components/about/ResearchSection';
import Newsletter from '@/components/shortCode/Newsletter';

/**
 * About Page
 * 
 * Displays information about RiteFlow including:
 * - Mission statement and company values
 * - Team members showcase
 * - AI research initiatives
 * - Newsletter signup
 * 
 * All sections are modular and reusable components.
 */
export default function AboutPage() {
  return (
    <>
      {/* Banner/Mission Section */}
    <AboutBanner
  title="Our Mission"
  description="At EasyJewelry, our mission is to simplify how jewelry businesses operate. We built software that handles the day-to-day — inventory, sales, invoicing, finance, online store and more so owners can focus on what they do best: serving their customers and growing their business."
  image="/images/about/office.webp"
/>

      {/* Research Section */}
    <ResearchSection />
     
    </>
  );
}
