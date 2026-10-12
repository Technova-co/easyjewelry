import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { faqs } from './data';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-fraunces',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const pageUrl = '/features/audit-log';
const absoluteUrl = `https://easyjewelry.co${pageUrl}`;
const title = 'Audit Log for Jewelry Businesses | Easy Jewelry';
const description =
  'See who added, edited, deleted or printed every invoice, bill, fixing, voucher and item in your jewelry business, with the old and new value of every gram, rate and making charge.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl}#webpage`,
      url: absoluteUrl,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', name: 'EasyJewelry', url: 'https://easyjewelry.co' },
      breadcrumb: { '@id': `${absoluteUrl}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easyjewelry.co' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://easyjewelry.co/features' },
        { '@type': 'ListItem', position: 3, name: 'Audit Log', item: absoluteUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'jewelry software audit log',
    'jewelry accounting audit trail',
    'gold shop software',
    'who edited invoice',
    'deleted invoice history',
    'gold rate change history',
    'jewelry POS audit trail',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    type: 'website',
    url: pageUrl,
    siteName: 'EasyJewelry',
    locale: 'en_US',
    images: [
      {
        url: '/images/home/easyjewelry.png',
        width: 1200,
        height: 630,
        alt: 'EasyJewelry jewelry business software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/home/easyjewelry.png'],
  },
  robots: { index: true, follow: true },
};

export default function AuditLogLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </div>
  );
}
