import { programs } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';

const ProgramsSection = () => {
  return (
    <section id="programs" className="scroll-mt-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">বিভাগসমূহ</h2>
        <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">আমাদের মাদ্রাসায় বিভিন্ন বিষয়ে বিশেষায়িত বিভাগ রয়েছে।</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {programs.map((program, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <BookMarked className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <CardTitle className="font-headline text-base md:text-xl">{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs md:text-sm text-muted-foreground">{program.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
