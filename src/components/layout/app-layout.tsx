'use client';

import Link from 'next/link';
import { appName, navLinks } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, School } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:h-20 md:px-6">
      <div className="flex w-full items-center justify-between md:justify-center">
        <div className="md:absolute md:left-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <School className="h-6 w-6 text-primary" />
                  <span>{appName}</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-4 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      pathname === link.href && "bg-muted text-primary"
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-headline text-xl font-bold text-primary md:text-2xl"
          >
            {appName}
          </Link>
        </div>
        
        <div className="md:absolute md:right-6 md:w-[36px]"></div>
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
