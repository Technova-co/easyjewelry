'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

export default function JoinWishlist() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Cleanup success message timeout
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = (emailValue: string = email): boolean => {
    if (!emailValue.trim()) {
      setError('Email is required');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError('Invalid email address');
      return false;
    }
    setError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate email
    if (!validate()) {
      return;
    }

    if (!form.current) {
      setSubmitError('Form reference is missing');
      return;
    }

    // Check if EmailJS environment variables are set
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Email service configuration is missing. Please check your environment variables.');
      console.error('Missing EmailJS environment variables');
      return;
    }

    setSubmitting(true);

    try {
      // Send email via EmailJS
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        { publicKey }
      );

      // Success
      setSuccess(true);
      setEmail('');
      setError('');
      form.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitError(
        err instanceof Error 
          ? err.message 
          : 'Failed to subscribe. Please try again later.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Join Wishlist Area Start */}
      <section className="section-bottom-border relative z-1">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="max-w-[600px] mx-auto text-center" data-sttr-wrapper>
              {/* Section Banner */}
              <Heading as="h1" className="!leading-[1.2]" data-sttr-card>
                Join Wishlist
              </Heading>
              <p className="mt-4 md:mt-5 text-offWhite/80 overflow-hidden" data-sttr-card>
                Join our wishlist to get early access to upcoming features, tools, and integrations before anyone else. Stay ahead with exclusive updates.
              </p>
              <div data-sttr-card>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mt-5 sm:mt-8 lg:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4 max-w-[386px] mx-auto"
                  noValidate
                >
                  <div className="w-full sm:flex-1 [&>div]:mb-0 [&>div]:w-full">
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      error={error}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient"
                    disabled={submitting}
                    loading={submitting}
                    className="min-w-[100px] h-[45px]"
                  >
                    {submitting ? 'Subscribing...' : 'Submit'}
                  </Button>
                </form>

                {success && (
                  <p className="text-base text-green-500 mt-3">
                    Successfully joined the wishlist! We&apos;ll keep you updated.
                  </p>
                )}

                {submitError && (
                  <p className="text-base text-red-500 mt-3">
                    {submitError}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Wishlist Area End */}
    </>
  );
}

