'use client';
import React, { useEffect, useState } from 'react'
import { X } from "lucide-react";
import BrandLogo from '../../icons/BrandLogo';
import Navigation from './Navigation';
import Link from 'next/link';
import bgImage from '@/../public/images/home/banner-bg.webp'
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import TopBar from '../TopBar';

const Header: React.FC = () => {
  const headerRef = React.useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Update body padding to account for fixed header height
  const updateBodyPadding = () => {
    if (!headerRef.current) return;
    const height = headerRef.current.getBoundingClientRect().height;
    document.body.style.paddingTop = `${height}px`;
  };

  useEffect(() => {
    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    return () => window.removeEventListener("resize", updateBodyPadding);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    const toggleLock = () => {
      if (mobileOpen && window.innerWidth <= 1024) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    toggleLock();
    window.addEventListener("resize", toggleLock);
    return () => window.removeEventListener("resize", toggleLock);
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="header-area fixed w-full left-0 top-0 right-0 z-[999] bg-secondary"
        style={{
          borderBottom: '1px solid transparent',
          borderImage: 'linear-gradient(to right, transparent, #b8960c, transparent) 1',
        }}
      >
        <TopBar />
        <div className="container">
          <div className="border-container">
            <div className="header-wrapper flex items-center justify-between gap-5 relative py-3 lg:py-0">

              {/* Logo */}
              <div className="logo max-w-[120px] w-full">
                <Link href="/" className="w-full">
                  <BrandLogo className="w-full" />
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:block">
                <div className="main-menu" data-menu="desktop">
                  <Navigation className="dextop-menu" compact={false} />
                </div>
              </div>

              {/* Right — CTA + Hamburger */}
              <div className="flex items-center gap-6">
                <div className="hidden sm:block">
                  <Link
                    href="/contact"
                    className="button-primary inline-flex items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px] relative z-1 overflow-hidden text-center tracking-[0.1px]"
                  >
                    Request Demo
                  </Link>
                </div>

                {/* Hamburger */}
                <div
                  className="menuToggle lg:hidden cursor-pointer"
                  onClick={() => setMobileOpen(true)}
                >
                  <svg
                    className="stroke-current text-offWhite"
                    width="32"
                    viewBox="0 0 100 100"
                    fill="none"
                    strokeWidth="8"
                    strokeLinecap="round"
                  >
                    <line x1="20" y1="30" x2="80" y2="30" />
                    <line x1="20" y1="50" x2="80" y2="50" />
                    <line x1="20" y1="70" x2="80" y2="70" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-full bg-secondary z-[1000] lg:hidden"
          >
            <Image
              src={bgImage}
              alt="bg"
              className="absolute top-0 left-0 inset-0 object-cover z-[-1] h-full opacity-10"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="main-menu-wrap h-screen overflow-y-auto"
              data-menu="mobile"
            >
              {/* Mobile header bar */}
              <div className="border-b border-lineColor">
                <div className="container">
                  <div className="border-container py-2">
                    <div className="flex items-center justify-between py-3">
                      <Link href="/" onClick={() => setMobileOpen(false)}>
                        <BrandLogo className="min-h-8" />
                      </Link>
                      <button
                        onClick={() => setMobileOpen(false)}
                        className="menu-close z-20"
                        aria-label="Close menu"
                      >
                        <X className="text-offWhite w-6 h-6 sm:w-8 sm:h-8" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile nav links */}
              <div className="py-5">
                <div className="container">
                  <div className="main-menu">
                    <Navigation setMobileOpen={setMobileOpen} />
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="container pb-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="button-primary inline-flex w-full items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px] text-center tracking-[0.1px]"
                >
                  Request Demo
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;