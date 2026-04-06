'use client';

import React from 'react';
import PricingSection from '@/components/pricing/PricingSection';
import FAQSection from '@/components/faq/FAQSection';
import Newsletter from '@/components/shortCode/Newsletter';
import { faqData } from '@/data/faqData';

export default function PricingPage() {
  return (
    <>
      {/* Pricing Area */}
      <PricingSection variant="one" />

      {/* FAQ Area */}
      <FAQSection 
        title="Frequently Asked Questions About Pricing"
        description="Get quick answers about our AI tools, features, and services. Learn how RiteFlow helps you simplify work, boost creativity, and achieve smarter results."
        faqData={faqData}
      />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
