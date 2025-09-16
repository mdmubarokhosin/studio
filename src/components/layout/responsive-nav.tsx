'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/content';
import { cn } from '@/lib/utils';

export default function ResponsiveNav() {
  const pathname = usePathname();

  return (
    <nav id="floating-nav" className="fixed bottom-0 left-0 w-full h-[65px] z-50">
      <div id="nav-container">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn('nav-link', pathname === link.href && 'active')}
          >
            <link.icon className="w-6 h-6 mb-1" />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
