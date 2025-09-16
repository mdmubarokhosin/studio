import Link from 'next/link';
import { footerContent, socialLinks, appName } from '@/data/content';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className='space-y-2'>
            <h3 className="font-headline text-lg font-bold mb-2 text-primary">{appName}</h3>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2"><MapPin className="w-4 h-4 text-accent" /> {footerContent.address}</p>
          </div>
          <div className='space-y-2'>
            <h3 className="font-headline text-lg font-bold mb-2">যোগাযোগ</h3>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2"><Phone className="w-4 h-4 text-accent" /> {footerContent.phone}</p>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2"><Mail className="w-4 h-4 text-accent" /> {footerContent.email}</p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">সামাজিক মাধ্যম</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
