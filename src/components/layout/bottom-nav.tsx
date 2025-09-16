'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/content';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { appName } from '@/data/content';


const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t z-50">
      <div className="flex justify-around items-center h-16">
        {navLinks.slice(0, 4).map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors w-1/5',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              )}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
         <Sheet>
            <SheetTrigger asChild>
                <button className={cn(
                    'flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors w-1/5',
                    'text-muted-foreground hover:text-primary'
                )}>
                    <Menu className="w-5 h-5" />
                    <span>More</span>
                </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-3/4">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/" className="font-headline text-lg font-bold text-primary mb-4">
                  {appName}
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-medium hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">যোগাযোগ</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
      </div>
    </nav>
  );
};

export default BottomNav;
