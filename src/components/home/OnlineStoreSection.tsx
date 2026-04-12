'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AboutStatCard from './AboutStatCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AboutSectionProps {
  variant?: 'one' | 'two';
  title?: string;
  description?: string;
  videoSrc?: string;
  stats?: Array<{ value: number; suffix?: string; label: string }>;
  listItems?: string[];
  buttonText?: string;
  buttonLink?: string;
}

/**
 * AboutSection Component
 * 
 * About section with video demonstration and two variants:
 * - Variant One: Displays a list with checkmarks
 * - Variant Two: Displays statistics cards with animated counters
 * 
 * Features:
 * - Responsive video player with autoplay
 * - Two display variants (list or stats)
 * - Statistics counter animation (variant two)
 * - Call-to-action button
 * 
 * All content is customizable via props with sensible defaults.
 * 
 * @param {'one' | 'two'} variant - Display variant: 'one' for list, 'two' for stats (default: 'two')
 * @param {string} title - Section heading
 * @param {string} description - Section description text
 * @param {string} videoSrc - Path to video file
 * @param {Array} stats - Array of stat objects with value, suffix, and label (variant two)
 * @param {Array<string>} listItems - Array of list item strings (variant one)
 * @param {string} buttonText - CTA button text
 * @param {string} buttonLink - CTA button link
 * 
 * @example
 * <AboutSection variant="one" listItems={['From $0 to $500,000 in revenue.', '47% growth in new customers.']} />
 * <AboutSection variant="two" stats={[...]} />
 */
const AboutSection: React.FC<AboutSectionProps> = ({
  variant = 'two',
  title = 'Sell Your Jewelry Online With Your Own Store',
  description = "We build you a fully branded online jewelry store where your customers can browse your collections, place orders, and buy from you 24/7. It's all connected to your inventory and billing, so you can manage everything from one place.",
  imgSrc = '/images/home/online-store.png',
  stats = [
  ],
  listItems = [
  'Modern, professional design built for jewelry.',
  'Auto-syncs with your EasyJewelry inventory.',
]

}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set initial hidden state immediately on mount
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const container = containerRef.current;
    const thumbnail = container.querySelector('[data-video]');
    const title = container.querySelector('[data-title]');
    const excerpt = container.querySelector('[data-excerpt]');
    const topLine = container.querySelector('[data-line-top]');
    const list = container.querySelector('[data-list]');
    const lists = container.querySelectorAll('[data-lists]');
    const bottomLine = container.querySelector('[data-line-bottom]');
    const button = container.querySelector('[data-button]');

    const trailFrom = { y: 100, opacity: 0, filter: 'blur(16px)' };

    // Set initial hidden state
    if (title) {
      gsap.set(title, trailFrom);
    }
    if (thumbnail) {
      gsap.set(thumbnail, { ...trailFrom, scale: 0.8, transformOrigin: 'bottom left', y: 100 });
    }
    if (excerpt) {
      gsap.set(excerpt, trailFrom);
    }
    if (topLine) {
      gsap.set(topLine, trailFrom);
    }
    if (list) {
      gsap.set(list, trailFrom);
    }
    if (lists.length) {
      lists.forEach((listItem) => {
        gsap.set(listItem, trailFrom);
      });
    }
    if (bottomLine) {
      gsap.set(bottomLine, trailFrom);
    }
    if (button) {
      gsap.set(button, trailFrom);
    }
  }, [variant]);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Wait for preloader to finish
    const waitForPreloader = () => {
      return new Promise<void>((resolve) => {
        // Check if preloader is already done
        if (!document.documentElement.classList.contains('preloader-active')) {
          setTimeout(resolve, 100);
          return;
        }

        // Watch for preloader-active class removal
        const observer = new MutationObserver(() => {
          if (!document.documentElement.classList.contains('preloader-active')) {
            observer.disconnect();
            setTimeout(resolve, 300);
          }
        });

        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class'],
        });

        // Fallback timeout
        setTimeout(() => {
          observer.disconnect();
          resolve();
        }, 5000);
      });
    };

    let scrollTrigger: ScrollTrigger | null = null;
    let tl: gsap.core.Timeline | null = null;

    const initAnimation = async () => {
      // Wait for preloader to finish
      await waitForPreloader();

      if (!containerRef.current) return;

      const container = containerRef.current;
      const thumbnail = container.querySelector('[data-video]');
      const title = container.querySelector('[data-title]');
      const excerpt = container.querySelector('[data-excerpt]');
      const topLine = container.querySelector('[data-line-top]');
      const list = container.querySelector('[data-list]');
      const lists = container.querySelectorAll('[data-lists]');
      const bottomLine = container.querySelector('[data-line-bottom]');
      const button = container.querySelector('[data-button]');

      const trailFrom = { y: 100, opacity: 0, filter: 'blur(16px)' };
      const trailTo = { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'back' };

      tl = gsap.timeline({ paused: true });

      if (!tl) return;

      if (title) {
        tl.fromTo(
          title,
          { ...trailFrom },
          { ...trailTo },
          0
        );
      }

      if (thumbnail) {
        tl.fromTo(
          thumbnail,
          {
            ...trailFrom,
            scale: 0.8,
            transformOrigin: 'bottom left',
            y: 100,
          },
          {
            ...trailTo,
            scale: 1,
            duration: 0.8,
            y: 0,
          },
          '-=0.6'
        );
      }

      if (excerpt) {
        tl.fromTo(excerpt, { ...trailFrom }, { ...trailTo }, '-=0.6');
      }

      if (topLine) {
        tl.fromTo(topLine, { ...trailFrom }, { ...trailTo }, '-=0.6');
      }

      // Variant two: Use [data-lists] with stagger
      if (variant === 'two' && lists.length) {
        lists.forEach((listItem) => {
          tl!.fromTo(
            listItem,
            { ...trailFrom },
            { ...trailTo, stagger: 0.05 },
            '-=0.6'
          );
        });
      }

      // Variant one: Use [data-list]
      if (variant === 'one' && list) {
        tl.fromTo(list, { ...trailFrom }, { ...trailTo }, '-=0.6');
      }

      if (bottomLine) {
        tl.fromTo(bottomLine, { ...trailFrom }, { ...trailTo }, '-=0.6');
      }

      if (button) {
        tl.fromTo(button, { ...trailFrom }, { ...trailTo }, '-=0.6');
      }

      // ScrollTrigger attached separately to timeline
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        end: 'top 40%',
        animation: tl,
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
        // markers: true, // Uncomment for debugging
      });

      // In case layout shifts (fonts/images load), refresh triggers
      ScrollTrigger.refresh();
    };

    initAnimation();

    // Cleanup on unmount
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (tl) {
        tl.kill();
      }
    };
  }, [variant]);

  return (
    <section className="section-bottom-border relative z-10">
      <div className="container">
        <div className="border-container section-spacing-lg">
          <div
            ref={containerRef}
            className="flex justify-between gap-8 sm:gap-10 flex-col md:flex-row"
            data-container={variant === 'two' ? 'review-section' : 'trail-section'}
          >
            {/* Video */}
            <div className=" w-full relative rounded-20 overflow-hidden" >
              <Image
                data-lag="0.2"
                className="md:absolute top-0 left-0 w-full h-full object-cover rounded-20 min-h-[300px]"
                src={imgSrc}
                alt="EasyJewelry online store"
                width={560}
                height={315}
                aria-label="EasyJewlery online store"
              />

                 

            
              
            </div>
            

            

            {/* Content */}
            <div className="md:max-w-[575px] w-full md:py-5">
              <h2
                data-title
                className="gradient-text text-3xl sm:text-4xl lg:text-5xl xl:text-[51px] font-semibold -tracking-[0.4px] !leading-[1.2]"
              >
                {title}
              </h2>
              <p data-excerpt className="mt-4 md:mt-5 text-offWhite/80 tracking-[0.1px]">
                {description}
              </p>
              

        

              {/* Variant One: List with checkmarks */}
              {variant === 'one' && (
                <ul data-list className="font-medium text-offWhite/80 space-y-4">
                  {listItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Image
                        src="/images/home/list-check.svg"
                        alt="check"
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Variant Two: Stats Grid */}
              {variant === 'two' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">
                  {stats.map((stat, index) => (
                    <div key={index} data-lists>
                      <AboutStatCard
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                        delay={index * 100} // Stagger animation for each card
                      />
                    </div>
                  ))}
                </div>
              )}

                 <a
                      href="https://alwahdahgold.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:gap-3 transition-all duration-200 float-right"
                    >
                      View  live example
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>


            
                 
           

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.displayName = 'AboutSection';

export default AboutSection;
