import type { Metadata } from 'next';
import React from 'react';
import HeaderFooterWrapper from '@/components/Layouts/HeaderFooterWrapper';

export const metadata: Metadata = {
  title: 'RiteFlow Demo',
  description:
    'Where AI Meets Human Insight. RiteFlow automates the busywork, uncovers hidden data, and fuels your next big idea. Focus on the craft, let AI handle the rest.',
  keywords: ['AI tools', 'automation', 'productivity', 'RiteFlow'],
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeaderFooterWrapper>{children}</HeaderFooterWrapper>;
}
