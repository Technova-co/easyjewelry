'use client';

import React from 'react';
import Image from 'next/image';
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';
export interface ClientLogosProps {
  title?: string;
  logos?: Array<{ src: string; alt: string }>;
}

/**
 * ClientLogos Component
 * 
 * Displays client logos in a responsive grid format. Logos are lazy-loaded
 * for better performance. Supports custom title and logo array via props.
 * 
 * @param {string} title - Optional title text above the logos
 * @param {Array<{src: string, alt: string}>} logos - Array of logo objects with src and alt
 * 
 * @example
 * <ClientLogos />
 * 
 * @example
 * <ClientLogos 
 *   title="Our Partners"
 *   logos={[{src: '/logo1.svg', alt: 'Company 1'}]}
 * />
 */
const ClientLogos: React.FC<ClientLogosProps> = ({
  title = 'Trusted by jewelers worldwide',
  logos = [
    { src: '/images/client-logos/logo-01.avif', alt: 'client logo' },
    { src: '/images/client-logos/logo-02.avif', alt: 'client logo' },
    { src: '/images/client-logos/logo-03.png', alt: 'client logo' },
    { src: '/images/client-logos/logo-04.png', alt: 'client logo' },
    { src: '/images/client-logos/logo-05.webp', alt: 'client logo' },
    { src: '/images/client-logos/logo-06.webp', alt: 'client logo' },
    { src: '/images/client-logos/logo-07-al-othmaniy.png', alt: 'Al Othmaniy Jewellery' },
    { src: '/images/client-logos/logo-08-glida.png', alt: 'Glida Chain' },
  ],
}) => {
    // Custom options
    useStaggerAnimation({
      stagger: 0.1,
      duration: 0.8,
      waitForPreloader: false,
      start: 'top 70%',
    });
  return (
    <section className="section-bottom-border relative z-10" >
      <div className="container">
        <div className="border-container py-10" >
          <h2 className="text-xl leading-none font-normal font-dmSans text-offWhite/80 mb-8 text-center">
            {title}
          </h2>
          {/* Logos Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 items-center justify-center gap-x-6 gap-y-8 sm:gap-x-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex h-14 sm:h-16 items-center justify-center mx-auto w-full max-w-[120px]">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={120} 
                  height={64}
                  loading="lazy"
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ClientLogos.displayName = 'ClientLogos';

export default ClientLogos;
