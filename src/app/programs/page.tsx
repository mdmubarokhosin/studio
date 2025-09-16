import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BottomNav from '@/components/layout/bottom-nav';
import ProgramsSection from '@/components/sections/programs';

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <ProgramsSection />
        </div>
      </main>
      <Footer />
      <div className="pb-16 md:pb-0">
        <BottomNav />
      </div>
    </div>
  );
}
