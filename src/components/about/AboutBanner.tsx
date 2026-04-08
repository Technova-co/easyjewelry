'use client';
import React from 'react';
import Image from 'next/image';
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';
import testimonialImg from '@/../public/images/home/testimonial/testimonial-05.jpg';
export interface AboutBannerProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({
  title,
  description,
  image,
  imageAlt = 'about banner thumb',
}) => {
  // Custom options
  useStaggerAnimation({
    stagger: 0.1,
    duration: 0.8,
    waitForPreloader: true,
    start: 'top 70%',
  });
  return (
    <section className="section-bottom-border relative z-1">
      <div className="container">
        <div className="border-container section-spacing-lg">
          <div className="flex items-center justify-between gap-7 md:gap-10 flex-col md:flex-row" >
           

            {/* Content */}
            <div className="md:max-w-[560px] w-full">
              <h1 className="text-4xl sm:text-5xl lg:text-[51px] font-semibold gradient-text" data-sttr-card>
                {title}
              </h1>
              <p className="mt-3 sm:mt-5" data-sttr-card>
                {description}
              </p>
            </div>


             {/* Image */}
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
                      "EasyJewelry was built from the ground up for jewelry businesses. We understood that generic software was never going to cut it for an industry as unique as yours."
                      </p>
                    </div>
                    
          </div>
        </div>
        
      </div>
    </section>
  );
};

AboutBanner.displayName = 'AboutBanner';

export default AboutBanner;
