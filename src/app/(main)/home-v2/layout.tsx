import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home V2 | Riteflow',
  description:
    'Empower Your Work with AI Tools. RiteFlow unites smart AI with human creativity, automating tasks, surfacing insights, and sparking ideas.',
  keywords: ['AI tools', 'automation', 'productivity', 'RiteFlow'],
};

export default function HomeV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
