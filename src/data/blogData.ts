/**
 * Blog Post Data
 * 
 * Contains all blog post information including title, description, category, image, etc.
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
}

/**
 * Blog Posts Data
 * Array of all blog posts
 */
export const blogData: BlogPost[] = [
  /*
    id: '1',
    slug: 'how-ai-is-transforming',
    title: 'How AI Is Transforming the Future of Work',
    description:
      'The future of work is here. Learn how humans and AI can collaborate to unlock creativity, productivity, and smarter.',
    category: 'Automation',
    image: {
      src: '/images/blog/blog-01.png',
      alt: 'blog thumb',
    },
    href: '/blog/how-ai-is-transforming',
  */
  
];
