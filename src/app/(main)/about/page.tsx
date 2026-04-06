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
        description="At RiteFlow, our mission is to empower every professional with the power of AI. We simplify complex workflows, automate daily tasks, and inspire innovation across all domains — from business to creativity. Our goal is to make AI accessible, reliable, and impactful for everyone, driving smarter and faster results."
        image="/images/about/banner-thumb.jpg"
      />

      {/* Team Section */}
      <TeamSection />

      {/* Research Section */}
      <ResearchSection />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
