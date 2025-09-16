import { stats } from '@/data/content';
import CountUp from '@/components/count-up';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  return (
    <section id="stats" className="scroll-mt-16 bg-secondary py-8 md:py-16 -mx-4 px-4 sm:mx-0 sm:rounded-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center p-4 shadow-md border-primary/20">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 text-accent mx-auto mb-2" />
                <div className="text-2xl md:text-5xl font-bold text-primary">
                  <CountUp end={stat.value} />+
                </div>
                <p className="text-xs md:text-lg text-muted-foreground mt-1 md:mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
