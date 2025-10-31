'use client';

import Link from 'next/link';
import { appName, navLinks } from '@/data/content';
import { Menu, School } from 'lucide-react';
import ResponsiveNav from './responsive-nav';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../mode-toggle';
import { ScrollArea } from '../ui/scroll-area';

function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <div className='flex items-center gap-2'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0">
              <SheetHeader className="drawer-header p-4">
                  <SheetTitle>
                      <Link
                          href="/"
                          className="flex items-center gap-3 text-lg font-semibold text-primary-foreground"
                      >
                          <div className="bg-background/80 p-2 rounded-full">
                            <School className="h-6 w-6 text-primary" />
                          </div>
                          <span className='font-headline'>{appName}</span>
                      </Link>
                  </SheetTitle>
              </SheetHeader>
              <ScrollArea className="flex-1">
                <nav className="grid gap-2 text-base font-medium p-4">
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
              </ScrollArea>
              <div className="mt-auto border-t p-4">
                  <ModeToggle />
              </div>
          </SheetContent>
        </Sheet>
        <Link
            href="/"
            className="font-headline text-xl font-bold text-primary md:text-2xl flex items-center gap-2"
          >
            <School className="h-6 w-6" />
            <span className="hidden md:inline">{appName}</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
         {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground",
                    pathname === link.href && "text-foreground font-semibold"
                )}
            >
                {link.label}
            </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <div className="hidden md:block">
            <ModeToggle />
        </div>
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
