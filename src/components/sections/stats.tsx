import { stats } from '@/data/content';
import CountUp from '@/components/count-up';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  return (
    <section id="stats" className="scroll-mt-20 bg-secondary py-12 md:py-20 -mx-4 px-4 md:mx-0 md:rounded-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center p-4 md:p-6 shadow-md border-primary/20">
              <CardContent className="p-0">
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-5xl font-bold text-primary">
                  <CountUp end={stat.value} />+
                </div>
                <p className="text-sm md:text-lg text-muted-foreground mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
