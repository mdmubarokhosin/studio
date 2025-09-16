import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const ResultsSection = () => {
  return (
    <section id="results" className="scroll-mt-16">
        <div className="text-center">
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">শিক্ষার্থীদের ফলাফল</h2>
            <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">
                আপনার সন্তানের বার্ষিক পরীক্ষার ফলাফল দেখতে নির্ধারিত তথ্য দিয়ে অনুসন্ধান করুন।
            </p>
             <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/results">রেজাল্ট চেক করুন</Link>
            </Button>
        </div>
    </section>
  );
};

export default ResultsSection;
