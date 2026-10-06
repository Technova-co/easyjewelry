import { Metadata } from 'next';
import { metalSalesFaqs, metalSalesIncluded } from './content';

const pageUrl = '/features/metal-sales';
const absoluteUrl = `https://easyjewelry.co${pageUrl}`;

const title = 'Metal Sales and Jewelry Invoice Software | EasyJewelry';
const description =
  'Create retail and wholesale jewelry invoices with fixed or live gold rate pricing. Record karat, gross weight, pure weight, making charges, VAT, and payment on one screen.';

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
      name: 'EasyJewelry Metal Sales and Jewelry Invoicing',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description,
      url: absoluteUrl,
      brand: { '@type': 'Brand', name: 'EasyJewelry' },
      featureList: [...metalSalesIncluded],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easyjewelry.co' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://easyjewelry.co/features' },
        { '@type': 'ListItem', position: 3, name: 'Metal sales', item: absoluteUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl}#faq`,
      mainEntity: metalSalesFaqs.map((faq) => ({
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
    'jewelry invoice software',
    'metal sales invoicing',
    'gold rate jewelry billing',
    'wholesale metal sales invoice',
    'jewelry VAT invoice',
    'making charges invoice',
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

export default function MetalSalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
