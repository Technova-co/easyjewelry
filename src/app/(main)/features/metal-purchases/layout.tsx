import { Metadata } from 'next';
import { metalPurchaseFaqs, metalPurchaseIncluded } from './content';

const pageUrl = '/features/metal-purchases';
const absoluteUrl = `https://easyjewelry.co${pageUrl}`;

const title = 'Metal Purchases and Gold Buying Software | EasyJewelry';
const description =
  'Record retail and wholesale metal purchases, old gold buy-back, and vendor bills. Capture karat, gross weight, and pure weight, then print a barcode tag to a Zebra printer.';

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
      about: { '@id': `${absoluteUrl}#software` },
      breadcrumb: { '@id': `${absoluteUrl}#breadcrumb` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://easyjewelry.co/images/home/easyjewelry.png',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${absoluteUrl}#software`,
      name: 'EasyJewelry Metal Purchases and Gold Buying',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description,
      url: absoluteUrl,
      brand: { '@type': 'Brand', name: 'EasyJewelry' },
      featureList: [...metalPurchaseIncluded],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easyjewelry.co' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://easyjewelry.co/features' },
        { '@type': 'ListItem', position: 3, name: 'Metal purchases', item: absoluteUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl}#faq`,
      mainEntity: metalPurchaseFaqs.map((faq) => ({
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
    'jewelry metal purchase software',
    'gold buying software',
    'old gold buy back',
    'jewelry barcode tag printing',
    'wholesale gold purchase bill',
    'zebra jewelry label printer',
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
        alt: 'EasyJewelry jewelry business software on phone, laptop, and tablet',
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

export default function MetalPurchasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
