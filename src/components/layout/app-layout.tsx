'use client';

import * as React from 'react';
import Link from 'next/link';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { appName } from '@/data/content';
import ResponsiveNav from './responsive-nav';

function AppHeader() {
  const { isMobile } = useSidebar();
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:h-16 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-headline text-lg md:text-xl font-bold text-primary"
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
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <ResponsiveNav />
        <AppHeader />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}
