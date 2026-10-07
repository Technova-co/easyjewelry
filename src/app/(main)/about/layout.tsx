import { Metadata } from 'next';
import { aboutFaqs } from './content';

const pageUrl = '/about';
const absoluteUrl = `https://easyjewelry.co${pageUrl}`;

const title = 'About EasyJewelry | Jewelry Business Software';
const description =
  'EasyJewelry is jewelry software from Technova for retailers, wholesalers, and manufacturers. It handles inventory, billing, finance, and the online store.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${absoluteUrl}#webpage`,
      url: absoluteUrl,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', name: 'EasyJewelry', url: 'https://easyjewelry.co' },
      about: { '@id': 'https://easyjewelry.co#organization' },
      breadcrumb: { '@id': `${absoluteUrl}#breadcrumb` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://easyjewelry.co/images/home/easyjewelry.png',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://easyjewelry.co#organization',
      name: 'EasyJewelry',
      url: 'https://easyjewelry.co',
      brand: { '@type': 'Brand', name: 'EasyJewelry' },
      parentOrganization: { '@type': 'Organization', name: 'Technova' },
      founder: { '@id': `${absoluteUrl}#founder` },
    },
    {
      '@type': 'Person',
      '@id': `${absoluteUrl}#founder`,
      name: 'Farhad Sayed',
      jobTitle: 'Founder and CEO',
      worksFor: { '@type': 'Organization', name: 'Technova' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easyjewelry.co' },
        { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl}#faq`,
      mainEntity: aboutFaqs.map((faq) => ({
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
    'about EasyJewelry',
    'jewelry business software',
    'jewelry ERP company',
    'Technova EasyJewelry',
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
