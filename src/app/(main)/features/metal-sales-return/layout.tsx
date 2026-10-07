import { Metadata } from 'next';
import { metalSalesReturnFaqs, metalSalesReturnIncluded } from './content';

const pageUrl = '/features/metal-sales-return';
const absoluteUrl = `https://easyjewelry.co${pageUrl}`;

const title = 'Jewelry Sales Return Software | EasyJewelry';
const description =
  'Process jewelry sales returns with purity, gross weight, and pure weight. Reverse VAT, record the gold rate and exchange rate, and credit the customer when the metal comes back.';

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
      name: 'EasyJewelry Jewelry Sales Returns',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description,
      url: absoluteUrl,
      brand: { '@type': 'Brand', name: 'EasyJewelry' },
      featureList: [...metalSalesReturnIncluded],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easyjewelry.co' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://easyjewelry.co/features' },
        { '@type': 'ListItem', position: 3, name: 'Sales returns', item: absoluteUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl}#faq`,
      mainEntity: metalSalesReturnFaqs.map((faq) => ({
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
    'jewelry sales return software',
    'gold return invoice',
    'jewelry VAT reversal',
    'unfixed metal return',
    'jewelry customer credit',
    'wholesale gold return',
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

export default function MetalSalesReturnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
