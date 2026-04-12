'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Layouts/header/Header';
import Footer from '@/components/Layouts/Footer';
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';

export default function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDemoPage = pathname === '/';

  useStaggerAnimation();

  return (
    <>
      {isDemoPage ? <Header /> : <Header />}
      {children}
      <Footer />
    </>
  );
}
