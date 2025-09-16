import Footer from '@/components/layout/footer';
import NoticeSection from '@/components/sections/notice';

export default function NoticePage() {
  return (
    <>
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <NoticeSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
