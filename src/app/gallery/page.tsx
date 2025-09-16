import Footer from '@/components/layout/footer';
import GallerySection from '@/components/sections/gallery';

export default function GalleryPage() {
  return (
    <>
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <GallerySection />
        </div>
      </main>
      <Footer />
    </>
  );
}
