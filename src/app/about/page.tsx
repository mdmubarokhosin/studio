import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about';
import StatsSection from '@/components/sections/stats';
import ManagementSection from '@/components/sections/management';
import TestimonialsSection from '@/components/sections/testimonials';

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24">
          <AboutSection />
          <StatsSection />
          <ManagementSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
