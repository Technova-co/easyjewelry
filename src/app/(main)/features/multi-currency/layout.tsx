import { Metadata } from 'next';

const siteUrl = 'https://easyjewelry.co';

const faqs = [
  {
    question: 'How many currencies can I add?',
    answer:
      'You can add the currencies your jewelry business uses and select them when creating sales and purchase transactions.',
  },
  {
    question: 'Can I choose one base currency for reports?',
    answer:
      'Yes. Set your primary base currency and use it as the consistent reference point for business reporting.',
  },
  {
    question: 'Can I use different currencies for invoices and purchases?',
    answer:
      'Yes. Multi-currency support lets your team record invoices and purchases in the currency used for each transaction.',
  },
  {
    question: 'Who benefits most from multi-currency jewelry software?',
    answer:
      'Jewelry retailers, gold and silver wholesalers, and exporters benefit when they buy, sell, or report across international markets.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'EasyJewelry Multi-Currency Support',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Multi-currency jewelry software for retailers, wholesalers, and exporters to manage sales and purchases across currencies.',
      url: `${siteUrl}/features/multi-currency`,
      brand: { '@type': 'Brand', name: 'EasyJewelry' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Features', item: `${siteUrl}/features` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Multi-Currency',
          item: `${siteUrl}/features/multi-currency`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: 'Multi-Currency Jewelry Software | EasyJewelry',
  },
  description:
    'Manage international jewelry sales and purchases in multiple currencies with EasyJewelry. Set a base currency, simplify reporting, and trade globally.',
  alternates: {
    canonical: '/features/multi-currency',
  },
  openGraph: {
    title: 'Multi-Currency Jewelry Software | EasyJewelry',
    description:
      'Sell, purchase, and report across currencies with multi-currency software built for jewelry businesses.',
    type: 'website',
    url: '/features/multi-currency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Currency Jewelry Software | EasyJewelry',
    description:
      'Sell, purchase, and report across currencies with multi-currency software built for jewelry businesses.',
  },
};

export default function MultiCurrencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
