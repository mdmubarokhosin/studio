import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BottomNav from '@/components/layout/bottom-nav';
import AboutSection from '@/components/sections/about';
import StatsSection from '@/components/sections/stats';
import ManagementSection from '@/components/sections/management';
import TestimonialsSection from '@/components/sections/testimonials';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-16 space-y-12 md:space-y-24">
          <AboutSection />
          <StatsSection />
          <ManagementSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
      <div className="pb-16 md:pb-0">
        <BottomNav />
      </div>
    </div>
  );
}
