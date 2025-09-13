import Header from '@/components/layout/header';
import BottomNav from '@/components/layout/bottom-nav';
import Footer from '@/components/layout/footer';
import HeroSlider from '@/components/sections/hero-slider';
import AboutSection from '@/components/sections/about';
import StatsSection from '@/components/sections/stats';
import ProgramsSection from '@/components/sections/programs';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';
import ManagementSection from '@/components/sections/management';
import NoticeSection from '@/components/sections/notice';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <div className="container mx-auto px-4 py-8 md:py-16 space-y-12 md:space-y-24">
          <AboutSection />
          <StatsSection />
          <ProgramsSection />
          <NoticeSection />
          <GallerySection />
          <ManagementSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
