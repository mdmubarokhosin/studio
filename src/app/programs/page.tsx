import Footer from '@/components/layout/footer';
import ProgramsSection from '@/components/sections/programs';

export default function ProgramsPage() {
  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <ProgramsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
