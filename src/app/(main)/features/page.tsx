import React from 'react';
import FeaturesSection from '@/components/features/FeaturesSection';
import Newsletter from '@/components/shortCode/Newsletter';

/**
 * Features Page
 * 
 * Displays the features page with feature cards showcasing RiteFlow's capabilities.
 * Uses FeaturesSection component for the main content and Newsletter for signup.
 */
export default function FeaturesPage() {
  return (
    <>
      {/* Features Section */}
      <FeaturesSection />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
