import { aboutContent } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{aboutContent.title}</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">{aboutContent.description}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-accent">
              <CheckCircle />
              {aboutContent.missionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{aboutContent.mission}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-accent">
              <CheckCircle />
              {aboutContent.visionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{aboutContent.vision}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
