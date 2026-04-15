'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useHomeV2BannerAnimation } from '@/hooks/useHomeV2BannerAnimation';

export interface HomeV2BannerProps {
  badgeText?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features?: Array<{ text: string }>;
  thumbnailImage?: string;
  videoSrc?: string;
}

/**
 * HomeV2Banner Component
 * 
 * Hero banner section with video background and hero content.
 * Features:
 * - Full-width video background with parallax effect
 * - Responsive hero content with title, description, and CTAs
 * - Feature list with checkmarks
 * - Thumbnail image on larger screens
 * 
 * All content is customizable via props with sensible defaults.
 * This is a client component due to video interactions.
 * 
 * @param {string} badgeText - Badge text above title
 * @param {string} title - Main title text
 * @param {string} titleHighlight - Highlighted portion of title (italic)
 * @param {string} description - Hero description
 * @param {string} primaryButtonText - Primary CTA button text
 * @param {string} primaryButtonLink - Primary CTA button link
 * @param {string} secondaryButtonText - Secondary CTA button text
 * @param {string} secondaryButtonLink - Secondary CTA button link
 * @param {Array<{text: string}>} features - Array of feature items
 * @param {string} thumbnailImage - Path to thumbnail image
 * @param {string} videoSrc - Path to background video
 * 
 * @example
 * <HomeV2Banner />
 */
const HomeV2Banner: React.FC<HomeV2BannerProps> = ({
  badgeText = 'Retailers & Wholesalers',
  title = 'Run Your Jewelry Business',
  titleHighlight = 'From One Screen',
  description = 'EasyJewelry brings every part of your jewelry business into one place. Manage inventory, billing, accounts, and even your online store, across all your locations.',
  primaryButtonText = 'Request Demo',
  primaryButtonLink = '/request-demo',
  secondaryButtonText = 'Watch Video',
  secondaryButtonLink = '/watch-video',
  features = [
    { text: 'Accessible on any device with no installation needed.' },
    { text: 'Easily customizable to your specific business needs.' },
  ],
  thumbnailImage = '/images/home/easyjewelry.png',
}) => {
  useHomeV2BannerAnimation();
  
  return (
    <section className="section-bottom-border overflow-hidden relative z-1" >
      {/* Video Background */}
    

      <div className="container">
        <div className="border-container py-15 ">
          <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
            {/* Left Content */}
            <div className="md:max-w-[450px] lg:max-w-[570px] w-full">
              <span className="badge-button" data-subtitle>{badgeText}</span>
              <h1
                className="font-semibold !leading-[1.1] gradient-text mt-5 text-[40px] lg:text-5xl xl:text-6xl 2xl:text-[60px] tracking-normal sm:-tracking-tight lg:-tracking-tighter xl:tracking-[-1.2px]"
                data-title
              >
                {title} <span className="font-instrument italic font-medium">{titleHighlight}</span>
              </h1>
              <p
                className="mt-2 sm:mt-5 text-base sm:text-lg lg:text-xl font-normal tracking-[0.2px] text-offWhite/80 !leading-normal"
                data-excerpt
              >
                {description}
              </p>

              {/* Buttons */}
              <div className="mt-5 sm:mt-8 lg:mt-12 flex flex-wrap gap-3 sm:gap-4" data-button>
                <Button href={primaryButtonLink} variant="primary" size="md">
                  {primaryButtonText}
                </Button>
                <Button href={secondaryButtonLink} variant="secondary" size="md">
                  {secondaryButtonText}
                </Button>
              </div>

              {/* Features List */}
              <ul className="mt-5 sm:mt-6 lg:mt-7.5 font-medium text-offWhite/80 space-y-2.5" data-list>
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src="/images/home/list-check.svg"
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Thumbnail */}
            <div className="max-w-[500px] md:max-w-[608px] w-full" data-thumbnail>
              <Image
                className="w-full"
                src={thumbnailImage}
                alt="EasyJewelry | Jewelry Business Management Software"
                width={608}
                height={500}
                priority
                data-lag="0.05"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeV2Banner.displayName = 'HomeV2Banner';

export default HomeV2Banner;
