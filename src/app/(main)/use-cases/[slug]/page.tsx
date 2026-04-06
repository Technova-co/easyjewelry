
import React from 'react';
import { notFound } from 'next/navigation';
import { useCaseData } from '@/data/useCaseData';
import { getUseCaseDetails } from '@/data/useCaseDetailsData';
import UseCaseDetailsClient from '@/components/useCase/UseCaseDetailsClient';

interface UseCaseDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return useCaseData.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export default async function UseCaseDetailsPage({ params }: UseCaseDetailsPageProps) {
  // Await params before accessing its properties
  const { slug } = await params;
  
  // Find the use case by slug
  const useCase = useCaseData.find((uc) => uc.slug === slug);

  // If use case not found, show 404
  if (!useCase) {
    notFound();
  }

  // Get detailed content for this use case
  const useCaseDetails = getUseCaseDetails(slug);

  // If details not found, show 404
  if (!useCaseDetails) {
    notFound();
  }

  return (
    <UseCaseDetailsClient
      useCase={useCase}
      useCaseDetails={useCaseDetails}
    />
  );
}
