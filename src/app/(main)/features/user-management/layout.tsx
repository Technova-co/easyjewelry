import { Metadata } from 'next';
import { userManagementFaqs } from './content';

const pageUrl = '/features/user-management';
const absoluteUrl = `https://easyjewelry.co${pageUrl}`;

const description =
  'Manage jewelry store staff with role-based access control. Assign users to branches and permissions so each person sees only what they need.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl}#webpage`,
      url: absoluteUrl,
      name: 'User Management and Access Control | EasyJewelry',
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
      name: 'EasyJewelry User Management and Access Control',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'User management for jewelry retailers and wholesalers. Create staff accounts, assign branches and roles, and control which sales, finance, and inventory data each person can see.',
      url: absoluteUrl,
      brand: { '@type': 'Brand', name: 'EasyJewelry' },
      featureList: [
        'Unlimited staff accounts',
        'Role-based module access',
        'Branch-level data isolation',
        'Multi-branch manager access',
        'Automatic password generation',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easyjewelry.co' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://easyjewelry.co/features' },
        { '@type': 'ListItem', position: 3, name: 'User Management', item: absoluteUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl}#faq`,
      mainEntity: userManagementFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: 'User Management and Access Control | EasyJewelry',
  },
  description,
  keywords: [
    'jewelry store user management',
    'jewelry staff access control',
    'role-based permissions jewelry software',
    'branch user access',
    'jewelry POS staff accounts',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'User Management and Access Control | EasyJewelry',
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
        alt: 'EasyJewelry user management on phone, laptop, and tablet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'User Management and Access Control | EasyJewelry',
    description,
    images: ['/images/home/easyjewelry.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UserManagementLayout({
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
