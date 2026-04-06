'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

export default function PasswordProtected() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Cleanup success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = (emailValue: string): boolean => {
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
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate(email)) return;

    if (!form.current) {
      setSubmitError('Form reference is missing');
      return;
    }

    // Using the same Env variables as your previous component
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Configuration missing.');
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        { publicKey }
      );

      setSuccess(true);
      setEmail('');
      form.current.reset();
    } catch {
      setSubmitError('Failed to send request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-bottom-border relative z-1">
      <div className="container">
        <div className="border-container section-spacing-lg">
          <div className="max-w-[600px] mx-auto text-center" data-sttr-wrapper>
            <Heading as="h1" className="!leading-[1.2]" data-sttr-card>
              Protected Page
            </Heading>
            <p className="mt-4 md:mt-5 text-offWhite/80 overflow-hidden" data-sttr-card>
              Access is restricted to authorized users only. Please enter your email to request access or verify your credentials.
            </p>
            <form 
              ref={form}
              onSubmit={handleSubmit}
              className="mt-5 sm:mt-8 lg:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4 max-w-[400px] mx-auto" 
              data-sttr-card
              noValidate
            >
              <div className="w-full sm:flex-1">
                <input 
                  className={`h-[45px] w-full p-3 bg-linear-to-b from-slateBlue/20 to-royalBlue/20 border ${error ? 'border-red-500' : 'border-lineColor'} rounded-[10px] outline-none duration-300 focus:border-primary text-offWhite placeholder:text-offWhite/60`}
                  type="email" 
                  placeholder="Enter your email address" 
                  name="email" 
                  value={email}
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 text-xs text-left mt-1">{error}</p>}
              </div>

              <Button 
                type="submit" 
                variant="gradient" 
                disabled={submitting}
                className="min-w-[100px] h-[45px]"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </Button>
            </form>

            {success && (
              <p className="text-base text-green-500 mt-3">
                Access request sent successfully!
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
    </section>
  );
}