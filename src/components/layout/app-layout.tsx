'use client';

import Link from 'next/link';
import { appName } from '@/data/content';
import ResponsiveNav from './responsive-nav';

function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:h-20 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-headline text-xl md:text-2xl font-bold text-primary"
          >
            {appName}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <div className="flex-1">{children}</div>
      <ResponsiveNav />
    </div>
  );
}
