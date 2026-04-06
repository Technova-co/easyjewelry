import type { Metadata } from 'next';
import { blogData } from '@/data/blogData';
import { getBlogDetails } from '@/data/blogDetailsData';

/**
 * Layout for Blog Details Page
 * 
 * This layout file handles dynamic metadata for individual blog post pages.
 * The page.tsx stays clean and only handles content rendering.
 * 
 * @param params - Contains the slug parameter from the URL
 */
interface BlogDetailsLayoutProps {
  params: Promise<{
    
    slug: string;
  }>;
  children: React.ReactNode;
}

/**
 * Generate metadata for dynamic blog detail pages
 * This function runs for each static path at build time
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);
  const blogDetails = getBlogDetails(slug);

  if (!blog || !blogDetails) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

/**
 * Layout Component
 * This wraps the page content but doesn't add any visual elements.
 * The actual layout (header/footer) comes from parent layout.
 */
export default async function BlogDetailsLayout({
  children,
  params,
}: BlogDetailsLayoutProps) {
  await params; // Ensure params is awaited (required in Next.js 15)
  return <>{children}</>;
}
