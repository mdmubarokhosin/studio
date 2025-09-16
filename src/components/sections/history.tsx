import { historyContent } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark } from 'lucide-react';

const HistorySection = () => {
  return (
    <section id="history" className="scroll-mt-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">{historyContent.title}</h2>
      </div>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-xl md:text-2xl text-accent">
                        <Landmark />
                        প্রতিষ্ঠা ও প্রেক্ষাপট
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm md:text-base">{historyContent.founding}</p>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-3">
            <h3 className="font-headline text-xl md:text-2xl font-bold mb-4 text-center text-primary">গুরুত্বপূর্ণ মাইলফলক</h3>
            <div className="relative border-l-2 border-primary/20 pl-6 space-y-8">
                {historyContent.milestones.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-8 top-1.5 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
                        <p className="font-bold text-lg text-accent">{item.year}</p>
                        <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
