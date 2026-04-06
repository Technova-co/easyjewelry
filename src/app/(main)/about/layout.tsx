import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about RiteFlow, our mission to empower professionals with AI, meet our passionate team of innovators, and explore our cutting-edge AI research initiatives.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
