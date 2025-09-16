import Footer from '@/components/layout/footer';
import HeroSlider from '@/components/sections/hero-slider';
import AboutSection from '@/components/sections/about';
import StatsSection from '@/components/sections/stats';
import ProgramsSection from '@/components/sections/programs';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';
import ManagementSection from '@/components/sections/management';
import NoticeSection from '@/components/sections/notice';
import ResultsSection from '@/components/sections/results';

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSlider />
        <div className="container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24">
          <AboutSection />
          <StatsSection />
          <ProgramsSection />
          <ResultsSection />
          <NoticeSection />
          <GallerySection />
          <ManagementSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
