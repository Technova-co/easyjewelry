'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseNewsletterAnimationOptions {
  waitForPreloader?: boolean;
  wrapperDuration?: number;
  videoDuration?: number;
  contentDuration?: number;
  position?: string | number;
  start?: string;
  end?: string;
  containerSelector?: string;
}
export function useNewsletterAnimation(options: UseNewsletterAnimationOptions = {}) {
  const {
    waitForPreloader = true,
    wrapperDuration = 0.6,
    videoDuration = 0.8,
    contentDuration = 0.6,
    position = '-=0.6',
    start = 'top 80%',
    end = 'top 40%',
    containerSelector = '[data-newsletter-wrapper]',
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Wait for preloader to finish
    const waitForPreloaderFinish = () => {
      if (!waitForPreloader) {
        return Promise.resolve();
      }

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

    let scrollTriggers: ScrollTrigger[] = [];
    let timelines: gsap.core.Timeline[] = [];

    const initAnimation = async () => {
      await waitForPreloaderFinish();

      const newsletterWrappers = document.querySelectorAll<HTMLElement>(containerSelector);

      if (!newsletterWrappers.length) return;

      // Shared animation properties for title, excerpt, and button
      const sharedFrom = { y: 100, opacity: 0, filter: 'blur(16px)' };
      const sharedTo = {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power3.out',
        duration: contentDuration,
      };

      newsletterWrappers.forEach((sttrWrapper) => {
        // Kill any existing ScrollTriggers for this wrapper to prevent duplicates
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === sttrWrapper) {
            st.kill();
          }
        });

        const title = sttrWrapper.querySelector<HTMLElement>('[data-news-title]');
        const excerpt = sttrWrapper.querySelector<HTMLElement>('[data-news-excerpt]');
        const button = sttrWrapper.querySelector<HTMLElement>('[data-news-button]');
        const video = sttrWrapper.querySelector<HTMLVideoElement>('[data-news-video]');
        const cta = sttrWrapper.querySelector<HTMLElement>('[data-news-cta]');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const arrowPaths = Array.from(
          sttrWrapper.querySelectorAll<SVGPathElement>('[data-news-arrow-path]')
        ).filter((path) => path.getClientRects().length > 0);
        const arrowHeads = Array.from(
          sttrWrapper.querySelectorAll<SVGPathElement>('[data-news-arrow-head]')
        ).filter((path) => path.getClientRects().length > 0);

        // Set initial hidden state
        gsap.set(sttrWrapper, { y: 100, opacity: 0, filter: 'blur(16px)' });

        if (video) {
          gsap.set(video, { x: 100, opacity: 0, filter: 'blur(16px)' });
        }
        if (title) {
          gsap.set(title, sharedFrom);
        }
        if (excerpt) {
          gsap.set(excerpt, sharedFrom);
        }
        if (button) {
          gsap.set(button, sharedFrom);
        }

        // Create timeline
        const tl = gsap.timeline({ paused: true });

        // Animate wrapper
        tl.fromTo(
          sttrWrapper,
          { y: 100, opacity: 0, filter: 'blur(16px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'power3.out',
            duration: wrapperDuration,
          },
          0
        );

        // Animate video
        if (video) {
          tl.fromTo(
            video,
            { x: 100, opacity: 0, filter: 'blur(16px)' },
            {
              x: 0,
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'power3.out',
              duration: videoDuration,
            },
            position
          );
        }

        // Animate title
        if (title) {
          tl.fromTo(title, sharedFrom, sharedTo, position);
        }

        // Animate excerpt
        if (excerpt) {
          tl.fromTo(excerpt, sharedFrom, sharedTo, position);
        }

        // Animate button
        if (button) {
          tl.fromTo(button, sharedFrom, sharedTo, position);
        }

        // Draw the gaze line into the demo button once the CTA has landed.
        const drawableArrows = arrowPaths
          .map((path) => ({ path, length: path.getTotalLength() }))
          .filter((item) => item.length > 0);

        if (!reduceMotion && drawableArrows.length) {
          arrowHeads.forEach((head) => {
            gsap.set(head, { opacity: 0 });
          });

          drawableArrows.forEach(({ path, length }) => {
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
            tl.to(
              path,
              { strokeDashoffset: 0, duration: 0.85, ease: 'power2.out' },
              '>-0.15'
            );
          });

          if (arrowHeads.length) {
            tl.to(arrowHeads, { opacity: 1, duration: 0.2, ease: 'power1.out' }, '>-0.05');
          }

          if (cta) {
            tl.fromTo(
              cta,
              { scale: 1 },
              {
                scale: 1.045,
                duration: 0.18,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut',
                transformOrigin: 'center center',
              },
              '<'
            );
          }
        }

        timelines.push(tl);

        // Create ScrollTrigger
        const scrollTrigger = ScrollTrigger.create({
          trigger: sttrWrapper,
          start: start,
          end: end,
          animation: tl,
          toggleActions: 'play none none none',
          invalidateOnRefresh: true,
          // markers: true, // Uncomment for debugging
        });

        scrollTriggers.push(scrollTrigger);
      });

      // Refresh ScrollTrigger in case of layout shifts (fonts/images load)
      ScrollTrigger.refresh();
    };

    initAnimation();

    // Cleanup on unmount
    return () => {
      scrollTriggers.forEach((st) => st.kill());
      timelines.forEach((tl) => tl.kill());
      scrollTriggers = [];
      timelines = [];
    };
  }, [
    waitForPreloader,
    wrapperDuration,
    videoDuration,
    contentDuration,
    position,
    start,
    end,
    containerSelector,
  ]);
}

