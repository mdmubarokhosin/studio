import { aboutContent } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">{aboutContent.title}</h2>
        <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground">{aboutContent.description}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl md:text-2xl text-accent">
              <CheckCircle />
              {aboutContent.missionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">{aboutContent.mission}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl md:text-2xl text-accent">
              <CheckCircle />
              {aboutContent.visionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">{aboutContent.vision}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
