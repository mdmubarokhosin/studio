'use client';

import Link from 'next/link';
import { appName } from '@/data/content';
import { School } from 'lucide-react';
import ResponsiveNav from './responsive-nav';

function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:h-20 md:px-6">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="font-headline text-xl font-bold text-primary md:text-2xl flex items-center gap-2"
        >
          <School className="h-6 w-6" />
          {appName}
        </Link>
      </div>
    </header>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <ResponsiveNav />
    </div>
  );
}
