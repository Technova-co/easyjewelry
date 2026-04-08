'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/heading';
import GetDemoForm from '@/components/shortCode/GetDemoForm';
import testimonialImg from '@/../public/images/home/testimonial/testimonial-05.jpg';
import type { GetDemoFormData } from '@/components/shortCode/GetDemoForm';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactInfo from '@/components/shortCode/ContactInfo';


// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GetDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (_formData: GetDemoFormData) => {
    // Handle form submission here
    // console.log('Form submitted:', _formData);
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
      {/* Get A Demo Area Start */}
      <section className="section-bottom-border relative z-1">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="rounded-20 py-8 px-5 sm:p-9 bg-blue overflow-hidden">
              <div className="flex justify-between gap-10 flex-col lg:flex-row">
                <div className="lg:max-w-[487px] w-full flex flex-col md:flex-row lg:flex-col justify-between gap-6 sm:gap-10">
                  {/* Heading and Description */}
                  <div
                    ref={containerRef}
                    className="sm:max-w-[487px] lg:max-w-none"
                    data-container="process-area"
                  >
                    <Heading as="h1" >Get Your Free Demo</Heading>
                  
                  </div>
                  
                  <div
                    className="flex flex-col gap-4"
                    data-lag="0.1"
                  >
                    {/* Testimonial Card */}
                    <div className="px-5 pt-5 pb-6 md:pb-10 rounded-20 bg-linear-to-b from-slateBlue/20 to-royalBlue/20 border border-lineColor/70 relative overflow-hidden">
                      <div
                        className="flex items-center gap-4"
                        data-sttr-card
                      >
                        <Image
                          className="w-10.5 h-10.5 object-cover rounded-full"
                          src={testimonialImg}
                          alt="testimonial author"
                          width={42}
                          height={42}
                        />
                        <div className="flex-1">
                          <h3 className="font-dmSans text-offWhite text-base leading-tight font-normal">
                            Farhad Sayed
                          </h3>
                          <p className="text-offWhite/60 text-sm leading-tight mt-1">
                            Founder & CEO, Technova
                          </p>
                        </div>
                      </div>
                      <div
                        className="my-4 md:my-5 lg:my-6 gradient-border w-full h-[1px]"
                        data-sttr-card
                      ></div>
                      <p className="text-offWhite" data-sttr-card>
                      Book your personalized demo and discover how EasyJewelry fits
                      your jewelry business. We&apos;ll show you the software, answer
                      questions, and give you a free trial to explore on your own.
                      </p>
                    </div>
                        <ContactInfo
                      type="email"
                      value="support@easyjewelry.co"
                      href="mailto:support@easyjewelry.co"
                    />
                    <ContactInfo
                      type="phone"
                      value="+1 (800) 111-1111"
                      href="tel:+18001111111"
                    />
                    <ContactInfo
                      type="address"
                      value="123 Fifth Ave, New York, NY 12004"
                    />
                  </div>
                </div>

                {/* Form */}
                <GetDemoForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get A Demo Area End */}
    </>
  );
}

