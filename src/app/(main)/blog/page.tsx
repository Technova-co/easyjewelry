'use client';

import React, { useState } from 'react';
import BlogCard from '@/components/shortCode/BlogCard';
import { blogData } from '@/data/blogData';
import SectionBanner from '@/components/shortCode/SectionBanner';

/**
 * Blog Page
 * 
 * Displays all blog posts in a grid layout with Load More functionality.
 * Initially shows 6 cards, then loads 3 more cards on each "Load More" click.
 * Each card links to its details page.
 */
export default function Blog() {
  const [displayCount, setDisplayCount] = useState(6);
  const totalBlogs = blogData.length;
  const displayedBlogs = blogData.slice(0, displayCount);
  const remainingBlogs = totalBlogs - displayCount;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, totalBlogs));
  };

  // Show button logic:
  // - Show if remaining blogs >= 7 (can load 3 more, will still have >= 4 remaining)
  // - Show if remaining blogs > 0 but < 7 (can load remaining cards)
  // - Hide if no remaining blogs (remainingBlogs === 0)
  const showLoadMoreButton = remainingBlogs > 0;

  return (
    <section className="section-bottom-border relative z-1">
      <div className="container">
        <div className="border-container section-spacing-lg">
          {/* Section Banner */}
          <SectionBanner
            title="All Blog"
            description="Dive into the world of AI innovation, automation, and creativity. Explore every insight, update, and idea shaping the intelligent future of work."
          />

          <div data-sttr-wrapper>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {displayedBlogs.map((blog) => (
                // Blog Card Component
                <BlogCard key={blog.id} blog={blog} />
              ))}

            </div>

            {/* Load More Button */}
            {showLoadMoreButton && (
              <div className="mt-12 text-center" data-sttr-card>
                <button
                  onClick={handleLoadMore}
                  className="button-primary inline-flex items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px] relative z-1 overflow-hidden text-center"
                >
                  Load More
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
