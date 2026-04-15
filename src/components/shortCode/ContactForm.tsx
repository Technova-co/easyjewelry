'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (formData: ContactFormData) => void;
  className?: string;
}

interface FormErrors {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = ''
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = (data: ContactFormData = formData): boolean => {
    const newErrors: FormErrors = {
      name: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      message: '',
    };
    let isValid = true;

    if (!data.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!data.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^[\d\s\-\+\(\)]+$/.test(data.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
      isValid = false;
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      if (onSubmit) onSubmit(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSuccess(true);
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      setErrors({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      form.current?.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`lg:max-w-[561px] w-full ${className}`}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-4"
        noValidate
      >
        <div data-sttr-card>
          <Input
            type="text"
            label="Name *"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.name}
          />
        </div>

        <div data-sttr-card>
          <Input
            type="text"
            label="Company Name *"
            placeholder="Your company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.companyName}
          />
        </div>

        <div data-sttr-card>
          <Input
            type="email"
            label="Email *"
            placeholder="Your email address"
            name="email"
            value={formData.email}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.email}
          />
        </div>

        <div data-sttr-card>
          <Input
            type="tel"
            label="Phone Number *"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.phoneNumber}
          />
        </div>

        <div className="sm:col-span-2" data-sttr-card>
          <Textarea
            label="Message *"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
            error={errors.message}
          />
        </div>

        <div className="sm:col-span-2" data-sttr-card>
          <Button
            type="submit"
            variant="gradient"
            fullWidth
            disabled={submitting}
            loading={submitting}
          >
            {submitting ? 'Sending...' : 'Send'}
          </Button>
        </div>

        {success && (
          <div className="sm:col-span-2">
            <p className="text-base text-green-500 mt-2">
              Message sent. We will get back to you soon.
            </p>
          </div>
        )}

        {error && (
          <div className="sm:col-span-2">
            <p className="text-base text-red-500 mt-2">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;