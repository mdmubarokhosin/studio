'use client';

import Link from 'next/link';
import { appName, navLinks } from '@/data/content';
import { Menu, School } from 'lucide-react';
import ResponsiveNav from './responsive-nav';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SheetHeader className='p-6'>
            <SheetTitle>
                 <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <School className="h-6 w-6" />
                  <span>{appName}</span>
                </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="grid gap-2 text-base font-medium px-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-4 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground',
                    pathname === link.href && 'bg-muted text-foreground'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center justify-center md:justify-start">
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
