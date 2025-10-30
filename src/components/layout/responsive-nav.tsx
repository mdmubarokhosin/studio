'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/content';
import { cn } from '@/lib/utils';

export default function ResponsiveNav() {
  const pathname = usePathname();

  return (
    <nav id="floating-nav">
      <div id="nav-container">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn('nav-link', pathname === link.href && 'active')}
          >
            <link.icon className="w-6 h-6 mb-1 icon" />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
