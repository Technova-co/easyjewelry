import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';
import ResearchSection from '@/components/about/ResearchSection';


export default function AboutPage() {
  return (
    <>
      {/* Banner/Mission Section */}
    <AboutBanner
  title="Our Mission"
  description="At EasyJewelry, our mission is to simplify how jewelry businesses operate. We built software that handles inventory, billing, finance, online store and more so owners can focus on what they do best: serving their customers and growing their business."
  image="/images/about/office.webp"
/>

      {/* Research Section */}
    <ResearchSection />
     
    </>
  );
}
