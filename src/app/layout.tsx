import type { Metadata } from "next";
import "./styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import LenisProvider from "@/components/Layouts/LenisProvider";
//import Preloader from "@/components/Layouts/Preloader";
import { GoogleAnalytics } from '@next/third-parties/google';


const themeInitScript = `
(function () {
  try {
    var d = document.documentElement;
    var saved = localStorage.getItem('colorScheme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved ? (saved === 'dark') : prefersDark;
    d.classList[isDark ? 'add' : 'remove']('dark');
  } catch (e) {}
})();
`;

/*
const preloaderInitScript = `
(function () {
  try {
    document.documentElement.classList.add('preloader-active');
    document.body.style.overflow = 'hidden';
  } catch (e) {}
})();
`;
*/

export const metadata: Metadata = {
  metadataBase: new URL('https://easyjewelry.co'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        {/*<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: preloaderInitScript }} />*/}

              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'EasyJewelry',
          url: 'https://easyjewelry.co',
          operatingSystem: 'Web',
          applicationCategory: 'BusinessApplication',
          description: 'Manage your jewelry business inventory, billing, accounts, and even your online store from one screen.',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '0', description: 'Contact for pricing' },
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'EasyJewelry',
          url: 'https://easyjewelry.co',
          logo: 'https://easyjewelry.co/images/home/easyjewelry.png',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: 'support@easyjewelry.co',
            areaServed: 'US',
          },
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'EasyJewelry',
          url: 'https://easyjewelry.co',
        })}}
      />

      </head>
      <body>
        {/*<Preloader />*/}
        <NextTopLoader
          color="#1d4ed8"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <LenisProvider />
        {children}
        <GoogleAnalytics gaId="G-1WVT116CZY" />

      </body>
    </html>
  );
}
