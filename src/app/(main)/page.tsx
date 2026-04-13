import React from 'react';
import DemoBanner from '@/components/home/DemoBanner';
import HomeV2Banner from '@/components/home/HomeBanner';
import ClientLogos from '@/components/home/ClientLogos';
import FeaturesTable from '@/components/home/FeaturesTable';
import SolutionsSection from '@/components/solutions/SolutionsSection';
import AboutSection from '@/components/home/OnlineStoreSection';
import AddOnesTable from '@/components/home/AddOnesTable';



export default function DemoPage() {
  return (
    <>
      <HomeV2Banner />
      <ClientLogos />
      <SolutionsSection />
      <DemoBanner />
      <FeaturesTable />
      <AddOnesTable />
      <AboutSection variant='one'/>




    </>
  );
}

