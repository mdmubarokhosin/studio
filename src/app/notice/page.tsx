import Footer from '@/components/layout/footer';
import { notices } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronRight, Megaphone } from 'lucide-react';

export default function NoticePage() {
  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
             <div className="text-center mb-8 md:mb-12">
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">নোটিশ বোর্ড</h2>
                <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">গুরুত্বপূর্ণ ঘোষণা এবং সর্বশেষ খবর।</p>
            </div>
            <Card className="shadow-lg max-w-4xl mx-auto">
                <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <Megaphone className="text-accent" />
                    সকল নোটিশ
                </CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="space-y-4">
                    {notices.map((notice) => (
                    <li key={notice.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-secondary/50 rounded-lg">
                        <div className="flex-1">
                        <div className="flex items-center gap-3">
                            <p className="font-semibold text-sm md:text-base">{notice.title}</p>
                            {notice.isNew && <Badge variant="destructive" className="animate-pulse bg-primary text-primary-foreground text-xs">নতুন</Badge>}
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1 sm:mt-0">{notice.date}</p>
                        </div>
                        <Button asChild variant="ghost" size="sm" className="mt-2 sm:mt-0 self-start sm:self-center text-xs md:text-sm">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
