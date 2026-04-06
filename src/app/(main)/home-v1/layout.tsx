import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home V1',
  description:
    'Where AI Meets Human Insight. RiteFlow automates the busywork, uncovers hidden data, and fuels your next big idea. Focus on the craft, let AI handle the rest.',
  keywords: ['AI tools', 'automation', 'productivity', 'RiteFlow'],
};

export default function HomeV1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
