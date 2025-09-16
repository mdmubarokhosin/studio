import Link from 'next/link';
import { notices } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Megaphone } from 'lucide-react';

const NoticeSection = () => {
  return (
    <section id="notice" className="scroll-mt-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">নোটিশ বোর্ড</h2>
        <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">গুরুত্বপূর্ণ ঘোষণা এবং সর্বশেষ খবর।</p>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
            <Megaphone className="text-accent" />
            সর্বশেষ নোটিশ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {notices.slice(0, 3).map((notice) => (
              <li key={notice.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-sm md:text-base">{notice.title}</p>
                    {notice.isNew && <Badge variant="destructive" className="animate-pulse bg-primary text-primary-foreground text-xs">নতুন</Badge>}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{notice.date}</p>
                </div>
                <Button asChild variant="ghost" size="sm" className="mt-2 sm:mt-0 self-start sm:self-center text-xs md:text-sm">
                  <Link href={`/notice/${notice.id}`}>
                    বিস্তারিত
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="text-center mt-8">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/notice">সকল নোটিশ দেখুন</Link>
        </Button>
      </div>
    </section>
  );
};

export default NoticeSection;
