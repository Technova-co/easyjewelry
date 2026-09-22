'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useNewsletterAnimation } from '@/hooks/useNewsletterAnimation';

/**
 * Newsletter Data
 * 
 * Default content for the newsletter section.
 * Can be overridden via props.
 */
const newsletterData = {
  title: "",
  excerpt: "",
  buttonText: "",
  buttonLink: "",
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
 * Closing section that points the eye from the product shot to the demo request.
 * Features:
 * - Product image as the first fixation
 * - A directional cue that finishes on Request Demo
 * - Watch Video kept as a quiet text link so it does not compete
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
const arrowStroke = '#c9a227';

/**
 * Gaze cue. Eyes follow a line in the direction it travels, so this arrow
 * leaves the product and ends on the demo button — the only filled action.
 */
function DemoGazeCue({ direction }: { direction: 'into-button' | 'down' }) {
  const intoButton = direction === 'into-button';

  return (
    <div className={intoButton ? 'w-[188px]' : 'mb-3 lg:hidden'} aria-hidden="true">
      {intoButton ? null : (
        <p
          data-news-arrow-label
          className="font-instrument text-[1.7rem] italic leading-none text-offWhite"
        >
          See this on your shop
        </p>
      )}
      {intoButton ? (
        <svg viewBox="0 0 188 64" fill="none" className="h-16 w-[188px] max-w-none overflow-visible">
          <path
            data-news-arrow-path
            d="M4 22C48 18 92 20 132 34C150 40 164 46 170 48"
            stroke={arrowStroke}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path data-news-arrow-head d="M154 34L184 50L152 58Z" fill={arrowStroke} />
        </svg>
      ) : (
        <svg viewBox="0 0 64 58" fill="none" className="ml-12 mt-1 h-14 w-16 overflow-visible">
          <path
            data-news-arrow-path
            d="M32 4C34 18 32 30 32 44"
            stroke={arrowStroke}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path data-news-arrow-head d="M18 34L32 54L46 36Z" fill={arrowStroke} />
        </svg>
      )}
    </div>
  );
}

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
          <div data-lag="0.15" data-newsletter-wrapper>
            <div className="bg-blue rounded-20 border border-lineColor/70 px-4 sm:px-6 md:px-9 py-10 sm:py-14 md:py-20 lg:py-[90px] relative z-[1] overflow-hidden">

              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center">

                {/* Image — first fixation. The arrow continues that look into the CTA. */}
                <div className="relative w-full shrink-0 lg:w-[min(50%,480px)]">
                  <Image
                    src="/images/home/easyjewelry.png"
                    alt="EasyJewelry | Jewelry Business Management Software"
                    width={500}
                    height={500}
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="w-full max-w-[400px] sm:w-[80%] md:max-w-[520px] lg:w-[min(100%,460px)]">
                  <h3 data-news-title className="gradient-text !leading-[1.2] text-4xl md:text-5xl lg:text-[51px] font-semibold">
                    {title}
                  </h3>
                  <p data-news-excerpt className="mt-4 sm:mt-5 text-offWhite/80">
                    {excerpt}
                  </p>

                  <DemoGazeCue direction="down" />

                  <p
                    data-news-arrow-label
                    className="mb-2 hidden font-instrument text-[1.7rem] italic leading-none text-offWhite lg:block"
                    aria-hidden="true"
                  >
                    See this on your shop
                  </p>

                  <div className="relative">
                    {/* Head is pinned to the button; the tail runs back toward the product. */}
                    <div className="pointer-events-none absolute bottom-[calc(50%-12px)] right-[calc(100%-2px)] hidden lg:block">
                      <DemoGazeCue direction="into-button" />
                    </div>

                    <div data-news-button className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span data-news-cta className="inline-flex">
                        <Button
                          href={buttonLink}
                          variant="primary"
                          size="lg"
                        >
                          {buttonText}
                        </Button>
                      </span>
                      <Link
                        href="/watch-video"
                        className="px-1 text-sm font-medium text-offWhite/70 underline-offset-4 transition-colors duration-300 hover:text-tertiary hover:underline"
                      >
                        Watch Video
                      </Link>
                    </div>
                  </div>
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

