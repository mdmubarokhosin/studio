import Footer from '@/components/layout/footer';
import { notices } from '@/data/content';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Megaphone } from 'lucide-react';

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  const notice = notices.find((n) => n.id.toString() === params.id);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <Megaphone className="w-12 h-12 text-accent mx-auto mb-4" />
              <CardTitle className="font-headline text-xl md:text-3xl text-primary">{notice.title}</CardTitle>
              <div className="flex items-center justify-center text-sm md:text-base text-muted-foreground pt-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>প্রকাশিত: {notice.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border-t my-6"></div>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                {notice.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
