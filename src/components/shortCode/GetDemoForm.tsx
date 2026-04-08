'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface GetDemoFormData {
  name: string;
  company_name: string;
  phoneNumber: string;
  email: string;
  businessType: string[];
  commodities: string[];
  extras: string[];
}

export interface GetDemoFormProps {
  onSubmit?: (formData: GetDemoFormData) => void;
  className?: string;
}

interface FormErrors {
  name: string;
  company_name: string;
  phoneNumber: string;
  email: string;
  businessType: string;
  commodities: string;
}

const BUSINESS_TYPES = ['Retailer', 'Wholesaler'];
const COMMODITIES = ['Gold', 'Silver', 'Diamond'];
const EXTRAS = ['Loan', 'Layaway', 'Online Store'];

const GetDemoForm: React.FC<GetDemoFormProps> = ({
  onSubmit,
  className = ''
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<GetDemoFormData>({
    name: '',
    company_name: '',
    phoneNumber: '',
    email: '',
    businessType: [],
    commodities: [],
    extras: [],
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    company_name: '',
    phoneNumber: '',
    email: '',
    businessType: '',
    commodities: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = (data: GetDemoFormData = formData): boolean => {
    const newErrors: FormErrors = {
      name: '',
      company_name: '',
      phoneNumber: '',
      email: '',
      businessType: '',
      commodities: '',
    };
    let isValid = true;

    if (!data.name.trim()) {
      newErrors.name = 'Full name is required';
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
    }

    if (data.businessType.length === 0) {
      newErrors.businessType = 'Please select at least one business type';
      isValid = false;
    }

    if (data.commodities.length === 0) {
      newErrors.commodities = 'Please select at least one commodity';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckbox = (
    group: 'businessType' | 'commodities' | 'extras',
    value: string
  ) => {
    setFormData((prev) => {
      const current = prev[group];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
    if (group === 'businessType' || group === 'commodities') {
      setErrors((prev) => ({ ...prev, [group]: '' }));
    }
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!validate()) return;
    if (!form.current) {
      setError('Form reference is missing');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service configuration is missing.');
      return;
    }

    setSubmitting(true);

    try {
      if (onSubmit) onSubmit(formData);

      await emailjs.sendForm(serviceId, templateId, form.current, { publicKey });

      setSuccess(true);
      setFormData({
        name: '',
        company_name: '',
        phoneNumber: '',
        email: '',
        businessType: [],
        commodities: [],
        extras: [],
      });
      setErrors({
        name: '',
        company_name: '',
        phoneNumber: '',
        email: '',
        businessType: '',
        commodities: '',
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

  const renderCheckboxGroup = (
    group: 'businessType' | 'commodities' | 'extras',
    items: string[]
  ) => (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <label
          key={item}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            name={group}
            value={item}
            checked={formData[group].includes(item)}
            onChange={() => handleCheckbox(group, item)}
            className="hidden"
          />
         <span
          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
            formData[group].includes(item)
              ? 'bg-primary border-primary'
              : 'border-primary/40 bg-transparent'
          }`}
        >
            {formData[group].includes(item) && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          <span className="text-sm text-paragraph">{item}</span>
        </label>
      ))}
      <input type="hidden" name={group} value={formData[group].join(', ')} />
    </div>
  );

  return (
    <div className={`lg:max-w-[561px] w-full ${className}`}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-4"
        noValidate
      >
        {/* Name */}
        <div data-sttr-card>
          <Input
            type="text"
            label="Name"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
        </div>

        {/* Company Name */}
        <div data-sttr-card>
          <Input
            type="text"
            label="Company Name"
            placeholder="Your company name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            error={errors.company_name}
          />
        </div>

        {/* Phone */}
        <div data-sttr-card>
          <Input
            type="tel"
            label="Phone Number"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />
        </div>

        {/* Email */}
        <div data-sttr-card>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        {/* Business Type — required */}
        <div className="sm:col-span-2" data-sttr-card>
          <p className="text-sm font-medium text-offWhite mb-3">
            I am a <span className="text-red-500">*</span>
          </p>
          {renderCheckboxGroup('businessType', BUSINESS_TYPES)}
          {errors.businessType && (
            <p className="text-xs text-red-500 mt-2">{errors.businessType}</p>
          )}
        </div>

        {/* Commodities — required */}
        <div className="sm:col-span-2" data-sttr-card>
          <p className="text-sm font-medium text-offWhite mb-3">
            Which commodities do you deal in?{' '}
            <span className="text-red-500">*</span>
          </p>
          {renderCheckboxGroup('commodities', COMMODITIES)}
          {errors.commodities && (
            <p className="text-xs text-red-500 mt-2">{errors.commodities}</p>
          )}
        </div>

        {/* Extras — optional */}
        <div className="sm:col-span-2" data-sttr-card>
          <p className="text-sm font-medium text-offWhite mb-3">
            Are you interested in any of these?{' '}
            <span className="text-xs text-paragraph">(Optional)</span>
          </p>
          {renderCheckboxGroup('extras', EXTRAS)}
        </div>

        {/* Submit */}
        <div className="sm:col-span-2" data-sttr-card>
          <Button
            type="submit"
            variant="gradient"
            fullWidth
            disabled={submitting}
            loading={submitting}
          >
            {submitting ? 'Booking...' : 'Book a Demo'}
          </Button>
        </div>

        {success && (
          <div className="sm:col-span-2">
            <p className="text-base text-green-500 mt-2">
              Demo booked! We&apos;ll get back to you soon.
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

GetDemoForm.displayName = 'GetDemoForm';

export default GetDemoForm;