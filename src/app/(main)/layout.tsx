import type { Metadata } from 'next';
import React from 'react';
import HeaderFooterWrapper from '@/components/Layouts/HeaderFooterWrapper';

export const metadata: Metadata = {
  title: 'EasyJewelry — Jewelry Store Management Software',
  description:
    'The easiest jewelry ERP for retailers & wholesalers. Manage inventory, POS, invoicing and multi-branch — all from one screen.',
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
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderFooterWrapper>{children}</HeaderFooterWrapper>;
}
