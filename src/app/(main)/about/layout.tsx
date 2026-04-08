import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Us | EasyJewelry',
  description:
    'Learn about EasyJewelry, our mission, and how we help jewelries manage their business more efficiently.',
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
