import Link from 'next/link';
import { appName, navLinks } from '@/data/content';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header id="home" className="hidden md:flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          {appName}
        </Link>
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">যোগাযোগ</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
