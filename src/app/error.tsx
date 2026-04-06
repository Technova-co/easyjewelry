'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Layouts/header/Header';
import Footer from '@/components/Layouts/Footer';
import Image from 'next/image';
import errorImg from '@/../public/images/error/error.png';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <>
      <Header />
      <section className="section-bottom-border relative z-1">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="max-w-[600px] mx-auto text-center" data-sttr-wrapper>
              <div data-sttr-card>
                <Image
                  className="mb-5 md:mb-10 w-[90%] mx-auto"
                  src={errorImg}
                  alt="error"
                  width={600}
                  height={400}
                />
              </div>
              <Heading as="h1" className="!leading-[1.2]" data-sttr-card>
                Something went wrong!
              </Heading>
              <p className="mt-4 md:mt-5 text-offWhite/80 overflow-hidden" data-sttr-card>
                We encountered an unexpected error. Please try again or return to the homepage.
              </p>
              <div className="mt-5 sm:mt-8 lg:mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center" data-sttr-card>
                <Button
                  onClick={reset}
                  variant="gradient"
                  className="min-w-[150px]"
                >
                  Try again
                </Button>
                <Link 
                  href="/" 
                  className="button-primary inline-flex items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px] relative z-1 overflow-hidden text-center"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
