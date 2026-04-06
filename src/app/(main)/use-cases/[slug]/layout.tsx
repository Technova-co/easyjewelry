import type { Metadata } from 'next';
import { useCaseData } from '@/data/useCaseData';
import { getUseCaseDetails } from '@/data/useCaseDetailsData';

/**
 * Layout for Use Case Details Page
 * 
 * This layout file handles metadata for dynamic use case pages.
 * The page.tsx stays clean and only handles content rendering.
 * 
 * @param params - Contains the slug parameter from the URL
 */
interface UseCaseDetailsLayoutProps {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

/**
 * Generate metadata for dynamic use case pages
 * This function runs for each static path at build time
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = useCaseData.find((uc) => uc.slug === slug);
  const useCaseDetails = getUseCaseDetails(slug);

  if (!useCase || !useCaseDetails) {
    return {
      title: 'Use Case Not Found',
    };
  }

  return {
    title: useCase.title,
    description: useCase.description,
  };
}

/**
 * Layout Component
 * This wraps the page content but doesn't add any visual elements.
 * The actual layout (header/footer) comes from parent layout.
 */
export default async function UseCaseDetailsLayout({
  children,
  params,
}: UseCaseDetailsLayoutProps) {
  await params; // Ensure params is awaited (required in Next.js 15)
  return <>{children}</>;
}
