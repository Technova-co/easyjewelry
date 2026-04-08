// components/layout/TopBar.tsx
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#8b6914] via-[#b8960c] to-[#8b6914] py-2 ">
      <div className="container">
        <div className="flex items-center justify-between">

          <Link
            href="tel:+18003990000"
            className="flex items-center gap-1.5 text-white text-xs hover:text-white/80 transition-colors no-underline"
          >
            <Phone size={12} />
            +1 (800) EZY-JWLR
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