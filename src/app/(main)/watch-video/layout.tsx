import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watch Video | EasyJewelry',
  description:
    'See EasyJewelry in action. Watch our demo video and discover how easy it is to manage your jewelry business from one screen.',
};

export default function watchVideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
