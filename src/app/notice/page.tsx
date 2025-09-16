import Footer from '@/components/layout/footer';
import { notices } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronRight, Megaphone, CalendarDays } from 'lucide-react';

export default function NoticePage() {
  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
             <div className="text-center mb-8 md:mb-12">
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">নোটিশ বোর্ড</h2>
                <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">গুরুত্বপূর্ণ ঘোষণা এবং সর্বশেষ খবর।</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
                {notices.map((notice) => (
                <Card key={notice.id} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row justify-between items-start">
                        <div>
                            <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                                {notice.isNew && <Badge variant="destructive" className="animate-pulse bg-primary text-primary-foreground text-xs">নতুন</Badge>}
                                {notice.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-2">
                                <CalendarDays className="w-4 h-4" />
                                {notice.date}
                            </CardDescription>
                        </div>
                        <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                            <Link href={`/notice/${notice.id}`}>
                                বিস্তারিত দেখুন
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{notice.description}</p>
                         <Button asChild variant="link" size="sm" className="sm:hidden -ml-4">
                            <Link href={`/notice/${notice.id}`}>
                                বিস্তারিত দেখুন
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
