import Link from 'next/link';
import { appName, navLinks } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header id="home" className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          {appName}
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">যোগাযোগ</Link>
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
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
      </div>
    </header>
  );
};

export default Header;
