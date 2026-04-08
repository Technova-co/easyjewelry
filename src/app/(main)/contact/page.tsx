'use client';

import React, { useEffect, useRef } from 'react';
import ContactInfo from '@/components/shortCode/ContactInfo';
import ContactForm from '@/components/shortCode/ContactForm';
import type { ContactFormData } from '@/components/shortCode/ContactForm';
import Heading from '@/components/ui/heading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}



export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (formData: ContactFormData) => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Set initial hidden state immediately on mount
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const processArea = containerRef.current;
    const title = processArea.querySelector('[data-title]');
    const excerpt = processArea.querySelector('[data-excerpt]');

    const trailFrom = { x: -100, opacity: 0, filter: 'blur(16px)' };

    // Set initial hidden state
    if (title) {
      gsap.set(title, trailFrom);
    }
    if (excerpt) {
      gsap.set(excerpt, trailFrom);
    }
  }, []);

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

      const processArea = containerRef.current;
      const title = processArea.querySelector('[data-title]');
      const excerpt = processArea.querySelector('[data-excerpt]');

      const trailFrom = { x: -100, opacity: 0, filter: 'blur(16px)' };
      const trailTo = { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'back' };

      tl = gsap.timeline({ paused: true });

      if (!tl) return;

      if (title) {
        tl.fromTo(title, { ...trailFrom }, { ...trailTo }, 0);
      }

      if (excerpt) {
        tl.fromTo(excerpt, { ...trailFrom }, { ...trailTo }, '-=0.6');
      }

      // ScrollTrigger attached separately to timeline
      scrollTrigger = ScrollTrigger.create({
        trigger: processArea,
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
  }, []);

  return (
    <>
      {/* Contact Area Start */}
      <section className="section-bottom-border relative z-1">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="rounded-20 py-8 px-5 sm:p-9 bg-blue">
              <div className="flex justify-between gap-10 flex-col lg:flex-row">
                {/* Left Side - Title and Contact Info */}
                <div className="lg:max-w-[487px] w-full flex flex-col md:flex-row lg:flex-col justify-between gap-6 sm:gap-10">

                  {/* Section Banner */}
                  <div ref={containerRef} className="sm:max-w-[487px] lg:max-w-none" data-container="process-area">
                    <Heading as="h1" >
                      Get in Touch with EasyJewelry
                    </Heading>
                    <p  className="mt-4 md:mt-5 text-offWhite/80">
                      Have a question about our jewelry solution? We&apos;re here to help.
                      Reach out and our team will get back to you as soon as possible.
                    </p>
                  </div>
                  {/* Contact Info */}
                  <div className="flex flex-col gap-4" >
                    <ContactInfo
                      type="email"
                      value="support@easyjewelry.co"
                      href="mailto:support@easyjewelry.co"
                    />
                    <ContactInfo
                      type="phone"
                      value="+1 (800) 111-1111"
                      href="tel:+8001111111"
                    />
                    <ContactInfo
                      type="address"
                      value="123 Fifth Ave, New York, NY 12004"
                    />
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <ContactForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Area End */}

    
    </>
  );
}

