import React from 'react';
import DemoBanner from '@/components/demo/DemoBanner';
import WhyChooseSection from '@/components/demo/WhyChooseSection';
import HomepagesSection from '@/components/demo/HomepagesSection';
import InnerPagesSection from '@/components/demo/InnerPagesSection';
import Newsletter from '@/components/shortCode/Newsletter';


import HomeV2Banner from '@/components/home-v2/HomeV2Banner';
import HomeBannerOne from '@/components/home-v1/HomeBannerOne';

export default function DemoPage() {
  return (
    <>
      <HomeV2Banner />
      <DemoBanner />

      <WhyChooseSection />

      <HomepagesSection />

      <InnerPagesSection />
      

      <Newsletter
        title="Start automating today. Let us handle the tasks."
        excerpt="Unlock the power of AI with RiteFlow. Simplify your work, boost creativity, and stay ahead — start your smarter journey now."
        buttonText="Get a Demo"
        buttonLink="/get-demo"
      />


    </>
  );
}
