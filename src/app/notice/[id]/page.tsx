import { notFound } from 'next/navigation';
import Footer from '@/components/layout/footer';
import { notices } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Download } from 'lucide-react';

export function generateStaticParams() {
  return notices.map((notice) => ({
    id: notice.id.toString(),
  }));
}

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  const notice = notices.find((n) => n.id.toString() === params.id);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="/notice">
                <ArrowLeft className="w-4 h-4 mr-2" />
                সকল নোটিশে ফিরে যান
              </Link>
            </Button>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              {notice.isNew && (
                <Badge
                  variant="destructive"
                  className="animate-pulse bg-primary text-primary-foreground text-xs w-fit mb-2"
                >
                  নতুন
                </Badge>
              )}
              <CardTitle className="text-xl md:text-3xl font-bold">{notice.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-2">
                <CalendarDays className="w-4 h-4" />
                <span>প্রকাশিত: {notice.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm md:prose-base max-w-none text-foreground/90">
                 <p>{notice.description}</p>
              </div>
              {notice.pdfLink && (
                <div className="mt-8">
                  <Button asChild>
                    <Link href={notice.pdfLink} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      পিডিএফ ডাউনলোড করুন
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
