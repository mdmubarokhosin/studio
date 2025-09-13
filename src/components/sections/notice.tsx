import Link from 'next/link';
import { notices } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Megaphone } from 'lucide-react';

const NoticeSection = () => {
  return (
    <section id="notice" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">নোটিশ বোর্ড</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">গুরুত্বপূর্ণ ঘোষণা এবং সর্বশেষ খবর।</p>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="text-accent" />
            সর্বশেষ নোটিশ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {notices.map((notice) => (
              <li key={notice.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-semibold">{notice.title}</p>
                    {notice.isNew && <Badge variant="destructive" className="animate-pulse bg-primary text-primary-foreground">নতুন</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{notice.date}</p>
                </div>
                <Button asChild variant="ghost" size="sm" className="mt-2 sm:mt-0 self-start sm:self-center">
                  <Link href={notice.link}>
                    বিস্তারিত
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default NoticeSection;
