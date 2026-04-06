'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export interface ContactFormData {
  name: string;
  location: string;
  email: string;
  phoneNumber: string;
  projectName: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (formData: ContactFormData) => void;
  className?: string;
}

interface FormErrors {
  name: string;
  location: string;
  email: string;
  phoneNumber: string;
  projectName: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmit,
  className = '' 
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    location: '',
    email: '',
    phoneNumber: '',
    projectName: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    location: '',
    email: '',
    phoneNumber: '',
    projectName: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cleanup success message timeout
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = (data: ContactFormData = formData): boolean => {
    const newErrors: FormErrors = {
      name: '',
      location: '',
      email: '',
      phoneNumber: '',
      projectName: '',
      message: '',
    };
    let isValid = true;

    if (!data.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!data.location.trim()) {
      newErrors.location = 'Location is required';
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

    if (!data.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
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
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    
    // Optional: Real-time validation (can be removed if you want validation only on submit)
    // validate(updatedData);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate form
    if (!validate()) {
      return;
    }

    if (!form.current) {
      setError('Form reference is missing');
      return;
    }

    // Check if EmailJS environment variables are set
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service configuration is missing. Please check your environment variables.');
      console.error('Missing EmailJS environment variables');
      return;
    }

    setSubmitting(true);

    try {
      // Call custom onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      // Send email via EmailJS
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        { publicKey }
      );

      // Success
      setSuccess(true);
      setFormData({
        name: '',
        location: '',
        email: '',
        phoneNumber: '',
        projectName: '',
        message: '',
      });
      setErrors({
        name: '',
        location: '',
        email: '',
        phoneNumber: '',
        projectName: '',
        message: '',
      });
      form.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Failed to send message. Please try again later.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`lg:max-w-[561px] w-full ${className}`} data-sttr-wrapper>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-4"
        noValidate
      >
        <div className="" data-sttr-card>
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.name}
          />
        </div>
        <div className="" data-sttr-card>
          <Input
            type="text"
            label="Location"
            placeholder="Where are you located?"
            name="location"
            value={formData.location}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.location}
          />
        </div>
        <div className="" data-sttr-card>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.email}
          />
        </div>
        <div className="" data-sttr-card>
          <Input
            type="tel"
            label="Phone Number"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.phoneNumber}
          />
        </div>
        <div className="sm:col-span-2" data-sttr-card>
          <Input
            type="text"
            label="Project Name"
            placeholder="What's your project called?"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            error={errors.projectName}
          />
        </div>
        <div className="sm:col-span-2" data-sttr-card>
          <Textarea
            label="Message"
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
              Form submitted successfully! We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {error && (
          <div className="sm:col-span-2">
            <p className="text-base text-red-500 mt-2">
              {error}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;

