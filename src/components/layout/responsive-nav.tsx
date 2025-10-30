'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/content';
import { cn } from '@/lib/utils';

export default function ResponsiveNav() {
  const pathname = usePathname();

  return (
    <nav
      id="floating-nav"
      className="fixed bottom-0 left-0 z-50 h-[var(--bottom-nav-height)] w-full max-w-screen-lg lg:left-1/2 lg:-translate-x-1/2"
    >
      <div id="nav-container">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'nav-link',
                pathname === link.href ? 'active' : ''
              )}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              <Icon />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
