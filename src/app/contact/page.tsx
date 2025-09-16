import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BottomNav from '@/components/layout/bottom-nav';
import ContactForm from '@/components/contact-form';
import { footerContent } from '@/data/content';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">যোগাযোগ</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">ভর্তি বা অন্য যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="font-headline text-2xl font-bold mb-6">যোগাযোগের তথ্য</h3>
                    <div className="space-y-4">
                         <p className="flex items-start gap-3">
                            <MapPin className="w-6 h-6 text-accent mt-1" />
                            <span>
                                <strong>ঠিকানা:</strong><br />
                                {footerContent.address}
                            </span>
                        </p>
                         <p className="flex items-center gap-3">
                            <Phone className="w-6 h-6 text-accent" />
                             <span>
                                <strong>ফোন:</strong><br />
                                <a href={`tel:${footerContent.phone.replace(/\s/g, '')}`} className="hover:text-primary">{footerContent.phone}</a>
                            </span>
                        </p>
                         <p className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-accent" />
                             <span>
                                <strong>ইমেইল:</strong><br />
                                <a href={`mailto:${footerContent.email}`} className="hover:text-primary">{footerContent.email}</a>
                            </span>
                        </p>
                    </div>
                     <div className="mt-8">
                        <h4 className="font-headline text-xl font-bold mb-4">আমাদের অবস্থান</h4>
                        <div className="aspect-video rounded-lg overflow-hidden border">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.815725916362!2d91.38333181541304!3d22.9234199850029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375369658ac1358b%3A0x6b3cf1d70e5d5b7a!2sMahmudpur%20Ashraful%20Uloom%20Madrasa!5e0!3m2!1sen!2sbd!4v1689234567890!5m2!1sen!2sbd" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
      </main>
      <Footer />
      <div className="pb-16 md:pb-0">
        <BottomNav />
      </div>
    </div>
  );
}
