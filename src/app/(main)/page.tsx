import React from 'react';
import DemoBanner from '@/components/home/DemoBanner';
import HomeV2Banner from '@/components/home/HomeBanner';
import ClientLogos from '@/components/home/ClientLogos';
import ComparisonTable from '@/components/home/FeaturesTable';
import SolutionsSection from '@/components/solutions/SolutionsSection';
import AboutSection from '@/components/home/OnlineStoreSection';

export default function DemoPage() {
  return (
    <>
      <HomeV2Banner />
      <ClientLogos />
      <SolutionsSection />
      <DemoBanner />
      <ComparisonTable />
      <AboutSection variant='one'/>



    </>
  );
}
