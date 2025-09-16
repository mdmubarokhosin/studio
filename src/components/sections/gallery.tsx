import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/data/content';
import { Card } from '@/components/ui/card';

const GallerySection = () => {
  return (
    <section id="gallery" className="scroll-mt-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">ছবি গ্যালারি</h2>
        <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">আমাদের মাদ্রাসার কিছু স্মরণীয় মুহূর্ত।</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {galleryImages.map((image) => (
          <Link key={image.id} href={image.src} target="_blank" rel="noopener noreferrer">
            <Card className="overflow-hidden group aspect-w-16 aspect-h-9 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                data-ai-hint={image.hint}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
