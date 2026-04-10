import type { Metadata } from "next";
import "./styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import LenisProvider from "@/components/Layouts/LenisProvider";
//import Preloader from "@/components/Layouts/Preloader";

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
  title: 'EasyJewelry — Jewelry Business Management Software',
  description:
    'The easiest jewelry software for retailers & wholesalers. Manage inventory, POS, invoicing and finance — all from one screen.',
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
      </body>
    </html>
  );
}
