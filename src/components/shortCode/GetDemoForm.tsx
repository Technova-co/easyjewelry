'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export interface GetDemoFormData {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  businessType: string[];
  commodities: string[];
  extras: string[];
  branches: number;
}

export interface GetDemoFormProps {
  onSubmit?: (formData: GetDemoFormData) => void;
  className?: string;
}

interface FormErrors {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  businessType: string;
  commodities: string;
  branches: string;
}

const BUSINESS_TYPES = ['Retailer', 'Wholesaler'];
const COMMODITIES = ['Gold', 'Silver', 'Diamond', 'Bullion'];
const EXTRAS = ['Loan', 'Layaway', 'Online Store'];

const GetDemoForm: React.FC<GetDemoFormProps> = ({
  onSubmit,
  className = ''
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<GetDemoFormData>({
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    businessType: [],
    commodities: [],
    extras: [],
    branches: 1,
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    businessType: '',
    commodities: '',
    branches: '',
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
      companyName: '',
      phoneNumber: '',
      email: '',
      businessType: '',
      commodities: '',
      branches: '',
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

    if (data.branches.toString().trim() === '' || isNaN(data.branches) || data.branches < 1) {
      newErrors. branches = 'Please type a valid number of branches';
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
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_DEMO_REQUEST;
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
        companyName: '',
        phoneNumber: '',
        email: '',
        businessType: [],
        commodities: [],
        extras: [],
        branches: 1,
      });
      setErrors({
        name: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        businessType: '',
        commodities: '',
        branches: '',
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

  useEffect(() => {
  if (success) {
    window.location.href = 'https://calendly.com/admin-easyjewelry/demo';
  }
}, [success]);

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
            label="Name *"
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
            label="Company Name *"
            placeholder="Your company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            error={errors.companyName}
          />
        </div>

        {/* Email */}
        <div data-sttr-card>
          <Input
            type="email"
            label="Email *"
            placeholder="Your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>


        {/* Phone */}
        <div data-sttr-card>
          <Input
            type="tel"
            label="Phone Number *"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />
        </div>

          {/* Number of Branches */}
        <div className="sm:col-span-2" data-sttr-card>
          <Input
            type="number"
            label="Number of Branches *"
            placeholder="Your branch count"
            name="branches"
            min={1}
            value={formData.branches}
            onChange={handleChange}
            error={errors.branches}
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
            What do you deal ?{' '}
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
            {submitting ? 'Booking...' : 'Book'}
          </Button>
        </div>

      

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