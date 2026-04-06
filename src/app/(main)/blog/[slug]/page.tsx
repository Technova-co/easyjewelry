import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/ui/heading';
import BlogCard from '@/components/shortCode/BlogCard';
import { blogData } from '@/data/blogData';
import { getBlogDetails, getRelatedBlogs } from '@/data/blogDetailsData';

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static paths for all blog posts at build time
 * This function is required for static site generation
 * Must be in a Server Component (no 'use client')
 */
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  // Await params before accessing its properties
  const { slug } = await params;
  
  // Find the blog by slug
  const blog = blogData.find((b) => b.slug === slug);

  // If blog not found, show 404
  if (!blog) {
    notFound();
  }

  // Get detailed content for this blog
  const blogDetails = getBlogDetails(slug);

  // If details not found, show 404
  if (!blogDetails) {
    notFound();
  }

  // Get related blog posts
  const relatedBlogs = blogDetails.relatedPosts
    ? getRelatedBlogs(blogDetails.relatedPosts)
    : [];

  // Render content based on type
  const renderContent = (content: typeof blogDetails.content[0], index: number) => {
    switch (content.type) {
      case 'heading':
        const headingClassName = 'mt-6 mb-4';
        switch (content.level) {
          case 1:
            return <h1 key={index} className={headingClassName}>{content.content}</h1>;
          case 2:
            return <h2 key={index} className={headingClassName}>{content.content}</h2>;
          case 3:
            return <h3 key={index} className={headingClassName}>{content.content}</h3>;
          case 4:
            return <h4 key={index} className={headingClassName}>{content.content}</h4>;
          case 5:
            return <h5 key={index} className={headingClassName}>{content.content}</h5>;
          case 6:
            return <h6 key={index} className={headingClassName}>{content.content}</h6>;
          default:
            return <h2 key={index} className={headingClassName}>{content.content}</h2>;
        }

      case 'paragraph':
        return (
          <p 
            key={index} 
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: content.content || '' }}
          />
        );

      case 'list':
        const ListTag = content.ordered ? 'ol' : 'ul';
        const listClassName = content.ordered
          ? 'mb-4 list-decimal list-inside space-y-2 !pl-0'
          : 'mb-4 list-disc list-inside space-y-2 !pl-0';
        return (
          <ListTag key={index} className={listClassName}>
            {content.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );

      case 'image':
        return (
          <figure key={index} className="my-6">
            <Image
              src={content.image?.src || ''}
              alt={content.image?.alt || ''}
              width={1200}
              height={600}
              className="w-full h-auto rounded-[10px]"
            />
            {content.image?.caption && (
              <figcaption className="mt-3 text-center text-offWhite/60 text-sm">
                {content.image.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'blockquote':
        return (
          <blockquote key={index} className="my-6border-l-4 border-tertiary pl-4 italic ">
            {content.content}
          </blockquote>
        );

      case 'video':
        return (
          <div key={index} className="my-6">
            <video
              src={content.video?.src}
              autoPlay={content.video?.autoplay}
              loop={content.video?.loop}
              muted={content.video?.muted}
              controls={content.video?.controls !== false}
              poster={content.video?.poster}
              playsInline
              className="w-full h-auto rounded-[10px]"
            />
          </div>
        );

      case 'youtube':
        if (!content.youtube?.videoId) return null;
        const youtubeParams = new URLSearchParams({
          autoplay: content.youtube.autoplay ? '1' : '0',
          mute: content.youtube.mute ? '1' : '0',
          loop: content.youtube.loop ? '1' : '0',
          rel: '0',
        });
        if (content.youtube.loop) {
          youtubeParams.append('playlist', content.youtube.videoId);
        }
        return (
          <div key={index} className="my-6">
            <div className="aspect-video w-full rounded-[10px] overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${content.youtube.videoId}?${youtubeParams.toString()}`}
                title={content.youtube.title || 'YouTube video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {content.youtube.title && (
              <p className="mt-2 text-sm text-offWhite/80 text-center">{content.youtube.title}</p>
            )}
          </div>
        );

      case 'vimeo':
        if (!content.vimeo?.videoId) return null;
        const vimeoParams = new URLSearchParams({
          autoplay: content.vimeo.autoplay ? '1' : '0',
          loop: content.vimeo.loop ? '1' : '0',
          muted: content.vimeo.muted ? '1' : '0',
        });
        return (
          <div key={index} className="my-6 aspect-video w-full rounded-[10px] overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${content.vimeo.videoId}?${vimeoParams.toString()}`}
              title={content.vimeo.title || 'Vimeo video'}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        );

      case 'audio':
        if (!content.audio?.src) return null;
        return (
          <div key={index} className="my-6">
            <audio
              src={content.audio.src}
              controls={content.audio.controls !== false}
              autoPlay={content.audio.autoplay}
              loop={content.audio.loop}
              className="w-full"
            >
              Your browser does not support the audio element.
            </audio>
            {content.audio.title && (
              <p className="mt-2 text-sm text-offWhite/80 text-center">{content.audio.title}</p>
            )}
          </div>
        );

      case 'code':
        return (
          <pre key={index} className="my-6 bg-blue p-4 rounded-[10px] overflow-x-auto">
            <code className={`text-sm text-offWhite ${content.language ? `language-${content.language}` : ''}`}>
              {content.code}
            </code>
          </pre>
        );

      case 'link':
        if (!content.link) return null;
        return (
          <div key={index} className="my-4">
            <Link
              href={content.link.href}
              target={content.link.target || '_self'}
              rel={content.link.rel}
              className="text-tertiary hover:text-tertiary/80 underline transition-colors"
            >
              {content.link.text}
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Blog Details Area Start */}
      <section className="section-bottom-border relative z-1 bg-secondary">
        <div className="container">
          <div className="border-container section-spacing-lg" data-sttr-wrapper>
            {/* Blog Details Title Start */}
            <div className="max-w-[600px] w-full mx-auto text-center" data-sttr-card>
            <h1 className="text-3xl md:text-[40px] lg:text-5xl xl:text-6xl font-semibold text-offWhite mb-4 sm:mb-5 lg:mb-6 !leading-tight gradient-text">
              {blogDetails.title}
            </h1>

              <p className="mt-4 sm:mt-5" data-sttr-card>
                {blogDetails.description}
              </p>
              {/* Blog Details Author Start */}
              <div data-sttr-card>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-4 mt-8"
                >
                  <Image
                    src={blogDetails.author.image}
                    alt={blogDetails.author.name}
                    width={46}
                    height={46}
                    className="w-11.5 h-11.5 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-base font-medium text-offWhite">
                      {blogDetails.author.name}
                    </h4>
                    <p className="text-sm text-offWhite/80">
                      {blogDetails.author.role}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Blog Details Featured Image Start */}
            <div className="mt-10 md:mt-16 lg:mt-20" data-sttr-card>
              <Image
                src={blogDetails.bannerImage.src}
                alt={blogDetails.bannerImage.alt}
                width={1200}
                height={600}
                className="rounded-20 w-full"
              />
            </div>
            

            {/* Blog Details Content Start */}
            <div className="max-w-[793px] mx-auto mt-10 md:mt-16 lg:mt-20">
              <article className="article-content">
                {blogDetails.content.map((content, index) =>
                  renderContent(content, index)
                )}
              </article>
            </div>
            {/* Blog Details Content End */}
          </div>
        </div>
      </section>
      {/* Blog Details Area End */}

      {/* Related Blog Start */}
      {relatedBlogs.length > 0 && (
        <section className="section-bottom-border relative z-1">
          <div className="container">
            <div className="border-container section-spacing-lg" data-sttr-wrapper>
              <div
                className="text-center mb-8 sm:mb-10 md:mb-[60px]"
                data-sttr-card
              >
                <Heading
                  as="h2"
                  className="gradient-text text-3xl md:text-4xl lg:text-5xl xl:text-[51px] font-semibold -tracking-[0.4px] !leading-tight"
                >
                  Related Blog
                </Heading>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Related Blog End */}
    </>
  );
}
