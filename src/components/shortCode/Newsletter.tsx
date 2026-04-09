'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNewsletterAnimation } from '@/hooks/useNewsletterAnimation';

/**
 * Newsletter Data
 * 
 * Default content for the newsletter section.
 * Can be overridden via props.
 */
const newsletterData = {
  title: "Start automating today. Let us handle the tasks.",
  excerpt: "Unlock the power of AI with RiteFlow. Simplify your work, boost creativity, and stay ahead — start your smarter journey now.",
  buttonText: "Start for free",
  buttonLink: "/get-demo",
};

export interface NewsletterProps {
  title?: string;
  excerpt?: string;
  buttonText?: string;
  buttonLink?: string;
}

/**
 * Newsletter Component
 * 
 * Newsletter signup section with video background (desktop) and decorative images (mobile).
 * Features:
 * - Responsive design with different backgrounds for mobile/desktop
 * - Video background on desktop
 * - Decorative images on mobile
 * - Customizable content via props
 * 
 * @param {string} title - Main heading text (default: from newsletterData)
 * @param {string} excerpt - Description text (default: from newsletterData)
 * @param {string} buttonText - CTA button text (default: from newsletterData)
 * @param {string} buttonLink - CTA button link (default: from newsletterData)
 * 
 * @example
 * <Newsletter />
 * 
 * @example
 * <Newsletter 
 *   title="Custom Title"
 *   excerpt="Custom description"
 *   buttonText="Get Started"
 *   buttonLink="/signup"
 * />
 */
const Newsletter: React.FC<NewsletterProps> = ({
  title = newsletterData.title,
  excerpt = newsletterData.excerpt,
  buttonText = newsletterData.buttonText,
  buttonLink = newsletterData.buttonLink,
}) => {
  useNewsletterAnimation();
  
  return (
    <section className="section-bottom-border">
      <div className="container">
        <div className="border-container section-spacing-lg">
          <div data-lag="0.15">
            <div className="bg-blue rounded-20 border border-lineColor/70 px-4 sm:px-6 md:px-9 py-10 sm:py-14 md:py-20 lg:py-[90px] relative z-1 overflow-hidden" >
              {/* Video Background - Desktop */}
             
              <Image 
                src="/images/home/easyjewelry.png" 
                alt="EasyJewelry — Jewelry Business Management Software" 
                className="float-right"
                width={500}
                height={500}
                aria-hidden="true"
              />


              {/* Content */}
              <div className="w-full sm:w-[80%] lg:w-full max-w-[400px] md:max-w-[580px]">
                <h3 data-news-title className="gradient-text !leading-[1.2] text-4xl md:text-5xl lg:text-[51px] font-semibold">
                  {title}
                </h3>
                <p data-news-excerpt className="mt-4 sm:mt-5 text-offWhite/80">
                  {excerpt}
                </p>
                <div data-news-button className="mt-5 sm:mt-8 lg:mt-12 flex flex-wrap gap-3 sm:gap-4">
                  <Button 
                    href={buttonLink}
                    variant="primary"
                    size="md"
                  >
                    {buttonText}
                  </Button>

                     <Button 
                    href="/watch-video"
                    variant="secondary"
                    size="md"
                  >
                    Watch Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Newsletter.displayName = 'Newsletter';

export default Newsletter;

