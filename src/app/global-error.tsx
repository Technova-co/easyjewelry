'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import errorImg from '@/../public/images/error/error.png';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-secondary p-4">
          <div className="max-w-[600px] mx-auto text-center">
            <Image
              className="mb-5 md:mb-10 w-[90%] mx-auto"
              src={errorImg}
              alt="error"
              width={600}
              height={400}
            />
            <Heading as="h1" className="!leading-[1.2] text-offWhite">
              Something went wrong!
            </Heading>
            <p className="mt-4 md:mt-5 text-offWhite/80">
              We encountered an unexpected error. Please try again or return to the homepage.
            </p>
            <div className="mt-5 sm:mt-8 lg:mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </body>
    </html>
  );
}
