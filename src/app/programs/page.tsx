import Footer from '@/components/layout/footer';
import { programs } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">আমাদের বিভাগসমূহ</h2>
                <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground">
                    আমরা শিক্ষার্থীদের জন্য যুগোপযোগী ও মানসম্মত ইসলামিক শিক্ষা নিশ্চিত করতে বিভিন্ন বিভাগ পরিচালনা করি। প্রতিটি বিভাগই নিজস্ব সিলেবাস ও অভিজ্ঞ শিক্ষকমণ্ডলী দ্বারা পরিচালিত হয়।
                </p>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {programs.map((program, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                        <BookMarked className="w-10 h-10 md:w-12 md:h-12 text-accent mt-1" />
                        <div>
                            <CardTitle className="font-headline text-lg md:text-xl">{program.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm md:text-base text-muted-foreground">{program.description}</p>
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
