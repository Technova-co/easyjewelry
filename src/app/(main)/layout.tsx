import type { Metadata } from 'next';
import React from 'react';
import HeaderFooterWrapper from '@/components/Layouts/HeaderFooterWrapper';

export const metadata: Metadata = {
  title: {
    default: 'EasyJewelry | Jewelry Business Management Software',
    template: '%s | EasyJewelry',
  },
  description:
    'The easiest jewelry software for retailers & wholesalers. Manage inventory, billing, accounts, and even your online store from one screen.',
  keywords: [
    'jewelry ERP software',
    'jewelry store management software',
    'jewelry inventory management software',
    'jewelry POS software',
    'jewelry inventory system',
    'jewelry store software',
    'jewelry business software',
    'jewelry retail software',
    'jewelry wholesale software',
    'jewellery ERP software',
    'jewellery store management software',
    'jewellery inventory management software',
    'jewellery POS software',
    'jewellery inventory system',
    'jewellery store software',
    'jewellery business software',
  ],
  authors: [{ name: 'EasyJewelry' }],
  creator: 'EasyJewelry',
  publisher: 'EasyJewelry',

   openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://easyjewelry.co',
    siteName: 'EasyJewelry',
    title: 'EasyJewelry | Jewelry Business Management Software',
    description: 'The easiest all-in-one jewelry software to manage your business.',
    images: [{ url: '/images/home/easyjewelry.png', width: 1200, height: 630, alt: 'EasyJewelry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyJewelry | Jewelry Business Management Software',
    description: 'The easiest all-in-one jewelry software to manage your business.',
    images: ['/images/home/easyjewelry.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
    <>
      <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
    </>
  );}
