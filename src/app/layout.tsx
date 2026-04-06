import type { Metadata } from "next";
import "./styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import LenisProvider from "@/components/Layouts/LenisProvider";
import Preloader from "@/components/Layouts/Preloader";

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

const preloaderInitScript = `
(function () {
  try {
    document.documentElement.classList.add('preloader-active');
    document.body.style.overflow = 'hidden';
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "RiteFlow - Next.js SaaS Template",
  description: "RiteFlow is a premium Next.js Template designed for AI startups, SaaS products, and tech companies. Fast, scalable, and built for high conversions.",
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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: preloaderInitScript }} />
      </head>
      <body>
        <Preloader />
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
