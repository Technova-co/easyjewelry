'use client';

import React from 'react';
import Header from '@/components/Layouts/header/Header';
import Footer from '@/components/Layouts/Footer';
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';

export default function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useStaggerAnimation();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
