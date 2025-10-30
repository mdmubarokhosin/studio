'use client';

import Link from 'next/link';
import { appName } from '@/data/content';

function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:h-20 md:px-6">
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-headline text-xl font-bold text-primary md:text-2xl"
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
    </div>
  );
}
