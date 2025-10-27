'use client';

import Link from 'next/link';
import { appName, navLinks } from '@/data/content';
import ResponsiveNav from './responsive-nav';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Menu,
  BookMarked,
  Users,
  ClipboardList,
  FileText,
  Images,
} from 'lucide-react';

function AppHeader() {
  const allNavLinks = [
    ...navLinks,
    { href: '/programs', label: 'বিভাগসমূহ', icon: BookMarked },
    { href: '/teachers', label: 'শিক্ষকমণ্ডলী', icon: Users },
    { href: '/admission', label: 'ভর্তি', icon: ClipboardList },
    { href: '/results', label: 'ফলাফল', icon: FileText },
    { href: '/gallery', label: 'গ্যালারি', icon: Images },
  ];

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:h-20 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-headline text-xl font-bold text-primary md:text-2xl"
          >
            {appName}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-primary">{appName}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 grid gap-4">
                {allNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
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
