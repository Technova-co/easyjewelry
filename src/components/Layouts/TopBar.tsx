// components/layout/TopBar.tsx
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#8b6914] via-[#b8960c] to-[#8b6914] py-2 ">
      <div className="container">
        <div className="flex items-center justify-between">

          <Link
            href="tel:+14157676362"
            className="flex items-center gap-1.5 text-white text-xs hover:text-white/80 transition-colors no-underline"
          >
            <Phone size={12} />
            +1 (415) 767 6362
          </Link>

          <Link
            href="mailto:support@easyjewelry.co"
            className="flex items-center gap-1.5 text-white text-xs hover:text-white/80 transition-colors no-underline"
          >
            <Mail size={12} />
            support@easyjewelry.co
          </Link>

        </div>
      </div>
    </div>
  );
}